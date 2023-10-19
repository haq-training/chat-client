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
import { FormProvider, RHFSelect, RHFTextField } from '../../../../components/hook-form';

// ----------------------------------------------------------------------

const UPDATE_USER_INFO = loader('../../../../graphql/mutations/user/upDateUserInformation.graphql');
// ----------------------------------------------------------------------

export const ROLE_TYPE = [1, 0];

UpDateEditUserInfo.propTypes = {
  isEdit: PropTypes.bool,
  row: PropTypes.object,
};

export default function UpDateEditUserInfo({ row, isEdit }) {
  const navigate = useNavigate();
  const [updateUser] = useMutation(UPDATE_USER_INFO);

  const { enqueueSnackbar } = useSnackbar();
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

  console.log('defaultValues', defaultValues);

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
      if (isEdit) {
        await updateUser({
          variables: {
            input: {
              id: Number(row.id),
            },
          },
        });
      }
      reset();
      enqueueSnackbar(!isEdit ? 'Cập nhật thông tin thành công!' : 'Cập nhật thông tin role thành công!', {
        variant: 'success',
      });
      navigate('/dashboard/nguoi-dung');
    } catch (error) {
      enqueueSnackbar(!isEdit ? 'Cập nhật thông tin không thành công!' : 'Cập nhật thông tin role không thành công!', {
        variant: 'error',
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} sx={{ ml: 3 }}>
      <Grid container spacing={4}>
        <Grid container justifyContent="center" item xs={6} sm={6} md={6}>
          <Card sx={{ p: 3 }}>
            <RHFTextField name="firstName" label="Họ" />
            <RHFTextField name="lastName" label="Tên" sx={{ mt: 4 }} />
            <RHFTextField name="email" label="Email" sx={{ mt: 4 }} />
            <RHFTextField name="location" label="Vị trí" sx={{ mt: 4 }} />
            <RHFSelect
              name="role"
              label="Chọn role"
              size={'small'}
              sx={{ mt: 4 }}
              onChange={(event) => {
                setValue('productType', event.target.value, { shouldValidate: true });
              }}
            >
              {ROLE_TYPE.map((roleType, idx) => (
                <option key={idx} value={roleType}>
                  {roleType}
                </option>
              ))}
            </RHFSelect>
            <Grid container justifyContent="flex-end" sx={{ mt: 4 }}>
              <Grid item sx={{ ml: 1 }}>
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  {isEdit ? 'Lưu' : 'Lưu thay đổi'}
                </LoadingButton>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
