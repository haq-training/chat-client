import PropTypes from 'prop-types';
import {loader} from 'graphql.macro';
import {Box, Card, CardHeader, Dialog, Grid, Stack} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import {useSnackbar} from 'notistack';
import {useForm} from 'react-hook-form';
import {useMutation, useQuery} from '@apollo/client';
import {useEffect, useMemo} from 'react';
import {FormProvider, RHFTextField} from './hook-form';

// ----------------------------------------------------------------------
const GET_USER_INFO = loader('../graphql/queries/user/me.graphql');
const UPDATE_USER_INFO = loader('../graphql/mutations/updateUser.graphql');
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

UserInfoPersonalPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  id: PropTypes.number,
  isEdit: PropTypes.bool,
  user: PropTypes.object,
};

export default function UserInfoPersonalPopup({  user, isEdit, isOpen, onClose, id }) {
  const { enqueueSnackbar } = useSnackbar();

  const defaultValues = useMemo(
      () => ({
        id: user?.id || id,
        email: user?.email || '',
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        location: user?.location || '',
        avatarUrl: user?.avatarUrl || null,
      }),
      [id, user]
  );

  const methods = useForm({
    defaultValues,
  });

  const {
    reset,
    watch,

    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const values = watch();


  useEffect(() => {
    if (isEdit && user) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, user]);
  const handleCancel = () => {
    onClose();
  };

  const { refetch } = useQuery(GET_USER_INFO, {
    variables: {
      id,
    },
  });

  const [updateUserInfoFn] = useMutation(UPDATE_USER_INFO, {
    refetchQueries: () => [
      {
        query: GET_USER_INFO,
        variables: { id: user.id },
      },
    ],
  });
  const onSubmit = async () => {
    try {
        await updateUserInfoFn({
          variables: {
            input: {
              id: Number(values.id),
              firstName: values.firstName,
              lastName: values.lastName,
              location: values.location,
              story: values.story,
            },
          },
        });

      reset();
      onClose();
      enqueueSnackbar('Sửa thông tin cá nhân thành công');
      await refetch();

    } catch (error) {
      enqueueSnackbar(


              `Sửa thông tin cá nhân không thành công. Nguyên nhân: ${error.message}`,
          {
            variant: 'error',
          }
      );
    }
  };

  return (
      <Dialog fullWidth maxWidth="md" open={isOpen} onClose={onClose} onBackdropClick={handleCancel}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <CardHeader sx={{ mb: 3 }} title={'Sửa sơ yếu lý lịch'} />

          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Card sx={{ p: 3 }}>
                <Box
                    sx={{
                      display: 'grid',
                      columnGap: 2,
                      rowGap: 3,
                      gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
                    }}
                >
                  <RHFTextField size="small" name="firstName" label="Họ" />
                  <RHFTextField size="small" name="lastName" label="Tên" />
                  <RHFTextField size="small" name="location" label="Địa chỉ" />
                  <RHFTextField size="small" name="story" label="Story" />
                </Box>
                <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                  <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                    {'Sửa'}
                  </LoadingButton>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </FormProvider>
      </Dialog>
  );
}
