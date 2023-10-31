import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { loader } from 'graphql.macro';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import FormProvider from '../../../components/hook-form/FormProvider';
import { RHFTextField } from '../../../components/hook-form';
import useIsMountedRef from '../../../hooks/useIsMountedRef';

// ----------------------------------------------------------------------

const ADD_FRIENDS = loader('../../../graphql/mutations/updateUser.graphql');

// ----------------------------------------------------------------------

const Transition = React.forwardRef((props, ref) => <Slide direction="up" children={null} ref={ref} {...props} />);

AddFriendsForm.propTypes = {
  handleClose: PropTypes.bool,
};
function AddFriendsForm({ handleClose }) {
  const isMountedRef = useIsMountedRef();
  const AddFriendsSchema = Yup.object().shape({
    email: Yup.string().required('Email Không được để trống!'),
    note: Yup.array().max(180, 'Không quá 180 ký tự!'),
  });

  const defaultValues = {
    email: '',
    note: '',
  };

  const methods = useForm({
    resolver: yupResolver(AddFriendsSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // api call
      console.log('Data', data);
    } catch (error) {
      console.log(error);
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Email" />
        <RHFTextField name="note" label="Ghi chú" />
        <Stack spacing={2} direction="row" alignItems="center" justifyContent="end" sx={{ mb: 1 }}>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" loading={isSubmitting}>
            Create
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
