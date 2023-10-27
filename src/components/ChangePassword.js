// import * as Yup from 'yup';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import LoadingOverlay from 'react-loading-overlay';
// import {Form, useForm, FormProvider} from "react-hook-form";
// import { useSnackbar } from 'notistack';
// import { Card, Stack, TextField } from '@mui/material';
// import { LoadingButton } from '@mui/lab';
// import { loader } from 'graphql.macro';
// import { PATH_AUTH } from '../routes/paths';
// import useAuth from "../hooks/useAuth";
//
//
// const USER_BY_ID = loader('../graphql/queries/user/me.graphql');
// const CHANGE_PASSWORD = loader('../graphql/mutations/changePassword.graphql');
//
// export default function AccountChangePassword() {
//     const { user, logout } = useAuth();
//     const { enqueueSnackbar } = useSnackbar();
//     const navigate = useNavigate();
//     const [loadingOpen, setLoadingOpen] = useState(false);
//
//     const handleLogout = async () => {
//         try {
//             await logout();
//             navigate(PATH_AUTH.login, { replace: true });
//         } catch (error) {
//             console.error(error);
//             enqueueSnackbar('Không thể đăng xuất!', { variant: 'error' });
//         }
//     };
//
//     const [changePassword] = useMutation(CHANGE_PASSWORD, {
//         refetchQueries: () => [
//             {
//                 query: USER_BY_ID,
//                 variables: { id: user.id },
//             },
//         ],
//         onCompleted: () => {
//             enqueueSnackbar('Đổi mật khẩu thành công', {
//                 variant: 'success',
//             });
//             handleLogout().then(() => {
//                 console.log('Đăng xuất thành công');
//             });
//         },
//         onError: (error) => {
//             switch (error.message) {
//                 case 'Invalid password':
//                     enqueueSnackbar('Cập nhật không thành công. Mật khẩu không chính xác', {
//                         variant: 'error',
//                     });
//                     break;
//                 default:
//                     enqueueSnackbar(`Cập nhật không thành công. Nguyên nhân: ${error.message}`, {
//                         variant: 'error',
//                     });
//             }
//         },
//     });
//
//     const ChangePassWordSchema = Yup.object().shape({
//         oldPassword: Yup.string().required('Bạn phải điền mật khẩu cũ'),
//         newPassword: Yup.string().min(6, 'Mật khẩu phải chứa it nhất 6 ký tự').required('Bạn phải điền mật khẩu mới'),
//         confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Mật khẩu không trùng nhau'),
//     });
//
//     const el = useForm({
//         initialValues: {
//             oldPassword: '',
//             newPassword: '',
//             confirmNewPassword: '',
//         },
//         validationSchema: ChangePassWordSchema,
//         onSubmit: async (values, { setSubmitting }) => {
//             try {
//                 setLoadingOpen(true);
//                 await changePassword({
//                     variables: {
//                         userId: user.id,
//                         oldPassword: values.oldPassword,
//                         newPassword: values.newPassword,
//                     },
//                 });
//             } catch (error) {
//                 enqueueSnackbar(`Cập nhật không thành công. Nguyên nhân: ${error.message}`, {
//                     variant: 'error',
//                 });
//             } finally {
//                 setLoadingOpen(false);
//                 setSubmitting(false);
//             }
//         },
//     });
//
//     const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = el;
//
//     return (
//         <LoadingOverlay active={loadingOpen} spinner text="Đang cập nhật mật khẩu người dùng...">
//             <Card sx={{ p: 3 }}>
//                 <FormProvider value={el}>
//                     <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
//                         <Stack spacing={3} alignItems="flex-end">
//                             <TextField
//                                 {...getFieldProps('oldPassword')}
//                                 fullWidth
//                                 autoComplete="on"
//                                 type="password"
//                                 label="Mật khẩu cũ"
//                                 error={Boolean(touched.oldPassword && errors.oldPassword)}
//                                 helperText={touched.oldPassword && errors.oldPassword}
//                             />
//
//                             <TextField
//                                 {...getFieldProps('newPassword')}
//                                 fullWidth
//                                 autoComplete="on"
//                                 type="password"
//                                 label="Mật khẩu mới"
//                                 error={Boolean(touched.newPassword && errors.newPassword)}
//                                 helperText={(touched.newPassword && errors.newPassword) || 'Mật khẩu phải chứa it nhất 6 ký tự'}
//                             />
//
//                             <TextField
//                                 {...getFieldProps('confirmNewPassword')}
//                                 fullWidth
//                                 autoComplete="on"
//                                 type="password"
//                                 label="Xác nhận mật khẩu mới"
//                                 error={Boolean(touched.confirmNewPassword && errors.confirmNewPassword)}
//                                 helperText={touched.confirmNewPassword && errors.confirmNewPassword}
//                             />
//
//                             <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
//                                 Lưu
//                             </LoadingButton>
//                         </Stack>
//                     </Form>
//                 </FormProvider>
//             </Card>
//         </LoadingOverlay>
//     );
// }
