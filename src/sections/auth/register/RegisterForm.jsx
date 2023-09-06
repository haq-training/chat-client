// noinspection JSUnresolvedVariable

// import * as Yup from 'yup';
import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// import useAuth from '../../../hooks/useAuth';
// import useIsMountedRef from '../../../hooks/useIsMountedRef';
import Iconify from '../../../components/Iconify';
// import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  // const { register } = useAuth();
  //
  // const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  // const RegisterSchema = Yup.object().shape({
  //   firstName: Yup.string().required('Tên không được để trống'),
  //   lastName: Yup.string().required('Họ không được để trống'),
  //   email: Yup.string().email('Hãy điền 1 email').required('Email không được để trống'),
  //   password: Yup.string().required('Mật khẩu không được để trống'),
  // });
  //
  // const defaultValues = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  // };
  //
  // const methods = useForm({
  //   // resolver: yupResolver(RegisterSchema),
  //   defaultValues,
  // });

  // const {
  //   reset,
  //
  //   setError,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  // } = methods;
  //
  // const onSubmit = async (data) => {
  //   try {
  //     await register(data.email, data.password, data.firstName, data.lastName);
  //   } catch (error) {
  //     console.error(error);
  //     reset();
  //     if (isMountedRef.current) {
  //       setError('afterSubmit', { ...error, message: error.message });
  //     }
  //   }
  // };

  return (
    <>
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField label="Họ" />
          <TextField label="Tên" />
        </Stack>

        <TextField label="Email" />

        <TextField
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

        <LoadingButton fullWidth size="large" type="submit" variant="contained">
          Đăng ký
        </LoadingButton>
      </Stack>
    </>
  );
}
