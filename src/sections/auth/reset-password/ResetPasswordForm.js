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
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

const FORGOT_PASSWORD = loader('../../../graphql/mutations/user/resetPassword.graphql');
// ----------------------------------------------------------------------

ResetPasswordForm.propTypes = {
  onSent: PropTypes.func,
  onGetEmail: PropTypes.func,
};

export default function ResetPasswordForm({ onSent, onGetEmail }) {
  const isMountedRef = useIsMountedRef();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Email phải là địa chỉ email hợp lệ').required('Email không được để trống'),
  });

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { email: 'demo@gmail.com' },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  console.log('click',isSubmitting);

  const [userForgetPassword, { loading: loadingUpdate }] = useMutation(UPDATE_USER_INFO, {
    refetchQueries: () => [
      {
        query: GET_USER_INFO,
        variables: { id: user.id },
      },
    ],
  });
  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (isMountedRef.current) {
        onSent();
        onGetEmail(data.email);
      }
    } catch (error) {
      console.error(error);
    }
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
