import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { loader } from 'graphql.macro';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { useMutation } from '@apollo/client';
import FormProvider from '../../../components/hook-form/FormProvider';
import { RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

const ADD_FRIENDS = loader('../../../graphql/mutations/user/addFriends.graphql');

// ----------------------------------------------------------------------

const Transition = React.forwardRef((props, ref) => <Slide direction="up" children={null} ref={ref} {...props} />);

AddFriendsForm.propTypes = {
  handleClose: PropTypes.bool,
};
function AddFriendsForm({ handleClose }) {
  const { enqueueSnackbar } = useSnackbar();

  const AddFriendsSchema = Yup.object().shape({
    email: Yup.string().required('Email Không được để trống!'),
  });

  const defaultValues = {
    email: '',
    note: 'Chào bạn,tôi là...',
  };

  const methods = useForm({
    resolver: yupResolver(AddFriendsSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const [AddFriends] = useMutation(ADD_FRIENDS, {
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
  const onSubmit = async (values) => {
    await AddFriends({
      variables: {
        email: values.email,
      },
    });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Email" />
        <RHFTextField name="note" label="Ghi chú" />
        <Stack spacing={2} direction="row" alignItems="center" justifyContent="end" sx={{ mb: 1 }}>
          <Button variant="contained" onClick={handleClose}>
            Thoát
          </Button>
          <Button type="submit" variant="contained" loading={isSubmitting}>
            Gửi
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}

const AddFriends = ({ open, handleClose }) => (
  <Dialog
    fullWidth
    maxWidth="xs"
    open={open}
    onClose={handleClose}
    TransitionComponent={Transition}
    keepMounted
    sx={{ p: 4 }}
  >
    <DialogTitle sx={{ mb: 2 }}>Gửi yêu cầu kết bạn</DialogTitle>
    <DialogContent>
      <AddFriendsForm handleClose={handleClose} />
    </DialogContent>
  </Dialog>
);
AddFriends.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.bool,
};
export default AddFriends;