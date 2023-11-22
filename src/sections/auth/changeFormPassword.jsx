import * as Yup from 'yup';
// form
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
// @mui
import {Box, Card} from '@mui/material';
import {LoadingButton} from '@mui/lab';
// hooks
import {loader} from 'graphql.macro';
import {useMutation} from '@apollo/client';
import {useSnackbar} from 'notistack';
import {useNavigate} from 'react-router-dom';
// components
import {FormProvider, RHFTextField} from '../../components/hook-form';
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------
const CHANGE_PASSWORD = loader('../../graphql/mutations/user/changePass.graphql');
// ----------------------------------------------------------------------

export default function ChangeFormPassword() {
  const { user } = useAuth();
  console.log('user',user)
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [changePasswordFn] = useMutation(CHANGE_PASSWORD, {
    onCompleted: async (res) => {
      if (res) {
        return res;
      }
      return null;
    },
  });

  const regex = {
    number: /^(?=.*[0-9]).+$/,
    lowerCase: /^(?=.*[a-z]).+$/,
    upperCase: /^(?=.*[A-Z]).+$/,
    specialCharacter: /^(?=.*[$&+,:;=?@#|'`~<>_{}.^*()%!]).+$/,
  };

  const ChangePasswordSchema = Yup.object().shape({
    new_passWord:Yup.string()
      .required('Mật khẩu không được để trống')
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự hoặc hơn')
      .matches(regex.number, 'Có ít nhất 1 số.')
      .matches(regex.lowerCase, 'Có ít nhất 1 ký tự viết thường.')
      .matches(regex.upperCase, 'Có ít nhất 1 ký tự in hoa.')
      .matches(regex.specialCharacter, 'Có ít nhất 1 ký tự đặc biệt.'),
    old_passWord: Yup.string()
      .required('Mật khẩu không được để trống')
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự hoặc hơn'),
  });

  const defaultValues = {
    new_passWord: '',
    old_passWord: '',
  };

  const methods = useForm({
    resolver: yupResolver(ChangePasswordSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await changePasswordFn({
        variables: {
          input: {
            id:user.id,
            new_passWord: data.new_passWord,
            old_passWord: data.old_passWord,
          },
        },
      });
      reset();
      enqueueSnackbar('Cập nhật mật khẩu thành công!');
      navigate('/auth/dang-nhap');
    } catch (error) {
      enqueueSnackbar(`Cập nhật mật khẩu không thành công. Nguyên nhân: ${error.message}`, {
        variant: 'error',
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ p: 3, py: 3}}>
        <Box>
          <RHFTextField sx={{ mt: 2 }} name="old_passWord" label="Mật khẩu cũ" />
          <RHFTextField sx={{ mt: 4 }} name="new_passWord" label="Mật khẩu mới" />
          <LoadingButton sx={{ mt: 4 }} fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Lưu thay đổi
          </LoadingButton>
        </Box>
      </Card>
    </FormProvider>
  );
}
