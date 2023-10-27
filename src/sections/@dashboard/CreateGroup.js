import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import FormProvider from '../../components/hook-form/FormProvider';
import { RHFTextField } from '../../components/hook-form';
import RHFAutocomplete from '../../components/hook-form/RHFAutocomplete';
import useIsMountedRef from '../../hooks/useIsMountedRef';
// import EmojiPicker from "../../components/EmojiPicker";

const MEMBERS = ['Name 1', 'Name 2', 'Name 3'];

const Transition = React.forwardRef((props, ref) => <Slide direction="up" children={null} ref={ref} {...props} />);

CreateGroupForm.propTypes = {
  handleClose: PropTypes.bool,
};
function CreateGroupForm({ handleClose }) {
  const isMountedRef = useIsMountedRef();
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    members: Yup.array().min(2, 'Must have at least 2 members'),
  });

  const defaultValues = {
    title: '',
    members: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
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
        <RHFTextField name="title" label="Title" />
        <RHFAutocomplete
          name="members"
          label="Members"
          multiple
          freeSolo
          options={MEMBERS.map((option) => option)}
          ChipProps={{ size: 'medium' }}
        />
        <Stack spacing={2} direction="row" alignItems="center" justifyContent="end">
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" loading={isSubmitting}>
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}

const CreateGroup = ({ open, handleClose }) => (
  <Dialog
    fullWidth
    maxWidth="xs"
    open={open}
    onClose={handleClose}
    TransitionComponent={Transition}
    keepMounted
    sx={{ p: 4 }}
  >
    <DialogTitle sx={{ mb: 3 }}>Create New Group</DialogTitle>
    <DialogContent>
      <CreateGroupForm handleClose={handleClose} />
    </DialogContent>
  </Dialog>
);
CreateGroup.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.bool,
};
export default CreateGroup;
