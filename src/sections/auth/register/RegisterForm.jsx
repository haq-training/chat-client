// noinspection JSUnresolvedVariable

import * as Yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, IconButton, InputAdornment, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const { register } = useAuth();
  // const  navigate = useNavigate();
  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);
  const regex = {
    number: /^(?=.*[0-9]).+$/,
    lowerCase: /^(?=.*[a-z]).+$/,
    upperCase: /^(?=.*[A-Z]).+$/,
    specialCharacter: /^(?=.*[$&+,:;=?@#|'`~<>_{}.^*()%!]).+$/,
  };
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('Họ không được để trống'),
    lastName: Yup.string().required('Tên không được để trống'),
    email: Yup.string().email('Hãy điền 1 email').required('Email không được để trống'),
    password: Yup.string()
      .required('Mật khẩu không được để trống')
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự hoặc hơn')
      .matches(regex.number, 'Có ít nhất 1 số.')
      .matches(regex.lowerCase, 'Có ít nhất 1 ký tự viết thường.')
      .matches(regex.upperCase, 'Có ít nhất 1 ký tự in hoa.')
      .matches(regex.specialCharacter, 'Có ít nhất 1 ký tự đặc biệt.'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await register(data.email, data.password, data.firstName, data.lastName);
    } catch (error) {
      console.error(error);
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="firstName" label="Họ" />
          <RHFTextField name="lastName" label="Tên" />
        </Stack>

        <RHFTextField name="email" label="Email" />

        <RHFTextField
          name="password"
          label="Mật khẩu"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Đăng ký
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
