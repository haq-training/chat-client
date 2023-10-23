import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { loader } from 'graphql.macro';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Card, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useEffect, useMemo } from 'react';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormProvider, RHFSelect, RHFTextField } from '../../../../components/hook-form';

// ----------------------------------------------------------------------

const UPDATE_USER_INFO = loader('../../../../graphql/mutations/user/upDateUserInformation.graphql');
// ----------------------------------------------------------------------

const ROLE_TYPE = [
  { name: 1, label: 'User' },
  { name: 0, label: 'Admin' },
];

UpDateEditUserInfo.propTypes = {
  isEdit: PropTypes.bool,
  row: PropTypes.object,
};

export default function UpDateEditUserInfo({ row, isEdit }) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [updateUser] = useMutation(UPDATE_USER_INFO, {
    onCompleted: () => {
      enqueueSnackbar('Cập nhật thông tin role thành công!', {
        variant: 'success',
      });
    },
  });
  const updateUserSchema = Yup.object().shape({
    firstName: Yup.string().required('Bạn hãy nhập tên'),
    lastName: Yup.string().required('Bạn hãy nhập họ'),
    role: Yup.number().required('Bạn chọn role'),
  });
  const defaultValues = useMemo(
    () => ({
      email: row?.email || '',
      firstName: row?.firstName || '',
      lastName: row?.lastName || '',
      location: row?.location || '',
      role: `${row.role}` || '',
    }),
    [row]
  );

  const methods = useForm({
    resolver: yupResolver(updateUserSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (isEdit && row) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, row]);

  const onSubmit = async () => {
    try {
      await updateUser({
        variables: {
          id: Number(row?.id),
        },
      });
      reset();
      enqueueSnackbar('Cập nhật thông tin role thành công!');
      navigate('/dashboard/nguoi-dung');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} sx={{ ml: 3 }}>
      <Grid container spacing={4}>
        <Grid container justifyContent="center" item xs={6} sm={6} md={6}>
          <Card sx={{ p: 3 }}>
            <RHFTextField disabled name="firstName" label="Họ" />
            <RHFTextField disabled name="lastName" label="Tên" sx={{ mt: 4 }} />
            <RHFTextField disabled name="email" label="Email" sx={{ mt: 4 }} />
            <RHFTextField disabled name="location" label="Vị trí" sx={{ mt: 4 }} />
            <RHFSelect
              name="role"
              label="Chọn role"
              size={'small'}
              sx={{ mt: 4 }}
              onChange={(event) => {
                setValue('role', event.target.value);
              }}
            >
              <option value="" />
              {ROLE_TYPE.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.label}
                </option>
              ))}
            </RHFSelect>
            <Grid container justifyContent="flex-end" sx={{ mt: 4 }}>
              <Grid item sx={{ ml: 1 }}>
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  {!isEdit ? 'Lưu' : 'Lưu thay đổi'}
                </LoadingButton>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
