import PropTypes from 'prop-types';
import { loader } from 'graphql.macro';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Card, CardHeader, Dialog, Grid, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormProvider, RHFTextField, RHFUploadAvatar } from '../../../components/hook-form';
import { fData } from '../../../utils/formatNumber';
import CommonBackdrop from '../../../components/CommonBackdrop';

// ----------------------------------------------------------------------
const GET_USER_INFO = loader('../../../graphql/queries/user/me.graphql');
const UPDATE_USER_INFO = loader('../../../graphql/mutations/updateUser.graphql');
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

UserInfoPersonalPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  id: PropTypes.number,
  isEdit: PropTypes.bool,
  user: PropTypes.object,
};

export default function UserInfoPersonalPopup({ user, isEdit, isOpen, onClose, id }) {
  const { enqueueSnackbar } = useSnackbar();
  const [uploadFile, setUploadFile] = useState(null);
  const updateUserSchema = Yup.object().shape({
    firstName: Yup.string().required('Bạn hãy nhập họ'),
    lastName: Yup.string().required('Bạn hãy nhập tên'),
    story: Yup.string().max(250, 'Tối đa 250 ký tự!'),
  });
  const defaultValues = useMemo(
    () => ({
      id: user?.id || id,
      email: user?.email || '',
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      location: user?.location || '',
      avatarUrl: `${user.avatarUrl}` || '',
      story: user?.story || '',
    }),
    [id, user]
  );
  const methods = useForm({
    resolver: yupResolver(updateUserSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const values = watch();

  useEffect(() => {
    if (isEdit && user) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, user]);
  const handleCancel = () => {
    methods.reset();
    onClose();
  };

  const { refetch } = useQuery(GET_USER_INFO, {
    variables: {
      id,
    },
  });

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'avatarUrl',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
      setUploadFile(file);
    },
    [setValue]
  );
  const [updateUserInfoFn, { loading: loadingUpdate }] = useMutation(UPDATE_USER_INFO, {
    refetchQueries: () => [
      {
        query: GET_USER_INFO,
        variables: { id: user.id },
      },
    ],
  });
  const onSubmit = async () => {
    try {
      await updateUserInfoFn({
        variables: {
          input: {
            id: Number(values.id),
            avatar: uploadFile,
            firstName:
              user?.firstName && values?.firstName && user?.firstName === values?.firstName ? null : values?.firstName,
            lastName:
              user?.lastName && values?.lastName && user?.lastName === values?.lastName ? null : values?.lastName,
            location: values.location,
            story: values.story,
          },
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);

      reset();
      onClose();
      enqueueSnackbar('Sửa thông tin cá nhân thành công');
      await refetch();
    } catch (error) {
      enqueueSnackbar(`Sửa thông tin cá nhân không thành công. Nguyên nhân: ${error.message}`, {
        variant: 'error',
      });
    }
  };

  return (
    <Dialog fullWidth maxWidth="md" open={isOpen} onClose={onClose}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <CardHeader sx={{ mb: 3 }} title={'Sửa sơ yếu lý lịch'} />

        <Grid container spacing={3}>
          <Grid item xs={6} md={6}>
            <Card sx={{ p: 3 }}>
              <RHFUploadAvatar
                name="avatarUrl"
                accept={{
                  'image/*': ['.png'],
                  'image/jpeg': ['.jpg', '.jpeg'],
                }}
                maxSize={31457280}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{ mt: 2, mx: 'auto', display: 'block', textAlign: 'center', color: 'text.secondary' }}
                  >
                    Định dạng ảnh *.jpeg, *.jpg, *.png <br /> Dung lượng tối đa {fData(31457280)}
                  </Typography>
                }
              />
            </Card>
          </Grid>
          <Grid container justifyContent="center" item xs={6} sm={6} md={6}>
            <Card sx={{ p: 3 }}>
              <RHFTextField name="firstName" label="Họ" />
              <RHFTextField name="lastName" label="Tên" sx={{ mt: 4 }} />
              <RHFTextField name="story" label="Story" sx={{ mt: 4 }} />
              <RHFTextField name="location" label="Địa chỉ" sx={{ mt: 4 }} />
              <Grid container justifyContent="flex-end" sx={{ mt: 4 }}>
                <Grid item>
                  <LoadingButton variant="contained" onClick={handleCancel}>
                    Hủy
                  </LoadingButton>
                </Grid>
                <Grid item sx={{ ml: 1 }}>
                  <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                    Lưu
                  </LoadingButton>
                </Grid>
                <CommonBackdrop loading={isSubmitting || loadingUpdate} />
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </FormProvider>
    </Dialog>
  );
}
