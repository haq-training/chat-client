// noinspection JSUnresolvedVariable

import * as Yup from 'yup';
import { forwardRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  Stack,
  Slide,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------
const REGISTER = loader('../../../graphql/mutations/user/register.graphql');
// ----------------------------------------------------------------------
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
// -----------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const isMountedRef = useIsMountedRef();
  const [registerFn] = useMutation(REGISTER, {
    onCompleted: async (res) => {
      if (res) {
        return res;
      }
      return null;
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    navigate('/', { replace: true });
  };

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
      const response = await registerFn({
        variables: {
          input: {
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            role: 1,
          },
        },
      });
      if (response.data) {
        setOpen(true);
      }
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
      <Dialog disableEscapeKeyDown open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
        <DialogTitle>Tạo tài khoản thành công</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Bạn đã tạo tài khoản thành công. Bạn có thể đăng nhập.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </FormProvider>
  );
}