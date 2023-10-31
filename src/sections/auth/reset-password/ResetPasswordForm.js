import * as Yup from 'yup';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { Link, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import { Link as RouterLink } from 'react-router-dom';
// components
import { useSnackbar } from 'notistack';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import { PATH_AUTH } from '../../../routes/paths';

// ----------------------------------------------------------------------

const FORGOT_PASSWORD = loader('../../../graphql/mutations/user/resetPassword.graphql');
// ----------------------------------------------------------------------

export default function ResetPasswordForm() {
  const { enqueueSnackbar } = useSnackbar();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Email phải là địa chỉ email hợp lệ').required('Email không được để trống'),
  });

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { email: 'demo@gmail.com' },
  });

  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const [ForgotPassword] = useMutation(FORGOT_PASSWORD, {
    onCompleted: () => {
      enqueueSnackbar('Gửi yêu cầu thành công', {
        variant: 'success',
      });
    },
    onError: (error) => {
      enqueueSnackbar(`Gửi yêu cầu không thành công. Nguyên nhân: ${error.message}`, {
        variant: 'error',
      });
    },
  });
  const onSubmit = async () => {
    await ForgotPassword({
      variables: {
        input: {
          gmail: values.email,
        },
      },
    });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3.5}>
        <RHFTextField name="email" label="Email address" />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Gửi yêu cầu
        </LoadingButton>
        <Typography sx={{ mt: { md: -2 } }} alignItems="center" justifyContent="center" display="flex">
          <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
            Quay trở lại trang đăng nhập!
          </Link>
        </Typography>
      </Stack>
    </FormProvider>
  );
}
