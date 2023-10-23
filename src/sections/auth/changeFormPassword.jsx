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

  const ChangePasswordSchema = Yup.object().shape({
    new_passWord: Yup.string().required('Bạn phải nhập mật khẩu mới'),
    old_passWord: Yup.string().required('Bạn phải nhập mật khẩu cũ'),
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
      console.error(error);
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
