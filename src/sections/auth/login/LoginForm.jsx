// noinspection JSUnresolvedVariable,JSValidateTypes

// import * as Yup from 'yup';
import { useEffect, useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, IconButton, InputAdornment, Link, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { PATH_AUTH } from '../../../routes/paths';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFCheckbox, RHFTextField } from '../../../components/hook-form';
// import useAuth from '../../../hooks/useAuth';
export default function LoginForm() {
  // const { login } = useAuth();

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  // const LoginSchema = Yup.object().shape({
  //   account: Yup.string().required('Tài khoản không được để trống'),
  //   password: Yup.string().required('Mật khẩu không được để trống'),
  // });

  // const defaultValues = useMemo(
  //   () => ({
  //     account: '',
  //     password: '',
  //     remember: true,
  //   }),
  //   []
  // );

  // const methods = useForm({
  //   resolver: yupResolver(LoginSchema),
  //   defaultValues,
  // });

  // const {
  //   reset,
  //   setError,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  // } = methods;

  // useEffect(() => {
  //   reset(defaultValues);
  // }, [defaultValues, reset]);
  //
  // const onSubmit = async (data) => {
  //   try {
  //     await login(data.account, data.password);
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
      <TextField label="Tài khoản" />

      <TextField
        label="Mật khẩu"
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Link component={RouterLink} variant="subtitle2" to={PATH_AUTH.resetPassword}>
          Quên mật khẩu?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained">
        Đăng nhập
      </LoadingButton>
    </>
  );
}

// ----------------------------------------------------------------------
