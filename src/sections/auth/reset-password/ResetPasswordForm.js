import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks

// components
import { FormProvider, RHFTextField,useSnackbar } from '../../../components/hook-form';

// ----------------------------------------------------------------------

const FORGOT_PASSWORD = loader('../../../graphql/mutations/user/resetPassword.graphql');
// ----------------------------------------------------------------------

ResetPasswordForm.propTypes = {
  onSent: PropTypes.func,
  onGetEmail: PropTypes.func,
};

export default function ResetPasswordForm({ onSent, onGetEmail }) {
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
  console.log('click',isSubmitting);

  const values = watch();

  const [ForgotPassword, { loading: loadingResetPassword }] = useMutation(FORGOT_PASSWORD, {
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
      <Stack spacing={2}>
        <RHFTextField name="email" label="Email address" />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Gửi yêu cầu
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
