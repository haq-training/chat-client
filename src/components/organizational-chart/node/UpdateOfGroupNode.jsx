// noinspection JSValidateTypes

import PropTypes from 'prop-types';
import { Dialog, Typography, Grid, Box, Card, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { fData } from '../../../utils/formatNumber';
import { FormProvider, RHFSelect, RHFTextField, RHFUploadAvatar } from '../../hook-form';
import Roles from '../../../sections/@dashboard/user/Role';
import useAuth from '../../../hooks/useAuth';
import { Role } from '../../../constant';
import CommonBackdrop from '../../CommonBackdrop';

// ----------------------------------------------------------------------
const UPDATE_USER = loader('../../../graphql/mutations/user/updateUserForAdminAndDirector.graphql');
const GET_ALL_USER = loader('../../../graphql/queries/user/getAllUsers.graphql');
// ----------------------------------------------------------------------
UpdateOfGroupNode.propTypes = {
  row: PropTypes.object,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default function UpdateOfGroupNode({ open, onClose, row }) {
  const [uploadFile, setUploadFile] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const [updateBtnEnable, setUpdateBtnEnable] = useState(false);
  const { user } = useAuth();

  const updateUserSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required('Hãy nhập số điện thoại')
      .matches(/([+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, 'Không đúng định dạng số điện thoại')
      .max(12, 'Số điện thoại chỉ có tối đa 10 số'),
    firstName: Yup.string().required('Bạn hãy nhập tên'),
    lastName: Yup.string().required('Bạn hãy nhập họ'),
  });

  const defaultValues = useMemo(
    () => ({
      id: row?.id,
      firstName: row?.firstName || '',
      phoneNumber: row?.phoneNumber || '',
      avatarUrl: row?.avatarUrl || '',
      address: row?.address || '',
      lastName: row?.lastName || '',
      role: row?.role || '',
      group: row?.group || '',
    }),
    [row]
  );
  const methods = useForm({
    resolver: yupResolver(updateUserSchema),
    defaultValues,
  });

  const [updateUserFn, { loading: loadingUpdate }] = useMutation(UPDATE_USER, {
    refetchQueries: () => [
      {
        query: GET_ALL_USER,
        variables: {
          input: {
            args: {
              first: 200,
            },
          },
        },
      },
    ],
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (row) {
      reset(defaultValues);
    }
  }, [row, defaultValues, reset]);
  const onSubmit = async () => {
    try {
      await updateUserFn({
        variables: {
          input: {
            userId: row?.id,
            avatar: uploadFile,
            firstName:
              row?.firstName && values?.firstName && row?.firstName === values?.firstName ? null : values?.firstName,
            lastName: row?.lastName && values?.lastName && row?.lastName === values?.lastName ? null : values?.lastName,
            phoneNumber:
              row?.phoneNumber && values?.phoneNumber && row?.phoneNumber === values?.phoneNumber
                ? null
                : values?.phoneNumber,
            address: row?.address && values?.address && row?.address === values?.address ? null : values?.address,
            role: row?.role && values?.role && row?.role === values?.role ? null : values?.role,
          },
        },
      });
      enqueueSnackbar('Cập nhật thành công!');
      onClose();
    } catch (error) {
      enqueueSnackbar(`Cập nhật không thành công`, {
        variant: 'error',
      });
    }
  };
  const handleCancel = () => {
    methods.reset();
    onClose();
  };
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'avatarUrl',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
      setUploadFile(file);
      setUpdateBtnEnable(true);
    },
    [setValue]
  );

  useMemo(() => {
    if (row?.role === Role.admin) {
      if (row?.id === Number(user.id)) {
        if (
          (row?.firstName && values?.firstName && row?.firstName === values?.firstName ? null : values?.firstName) ||
          (row?.lastName && values?.lastName && row?.lastName === values?.lastName ? null : values?.lastName) ||
          (row?.address && values?.address && row?.address === values?.address ? null : values?.address) ||
          (row?.phoneNumber && values?.phoneNumber && row?.phoneNumber === values?.phoneNumber
            ? null
            : values?.phoneNumber) ||
          (row?.role === values?.role ? null : values?.role)
        ) {
          setUpdateBtnEnable(true);
        }
      }
    } else if (
      (row?.firstName && values?.firstName && row?.firstName === values?.firstName ? null : values?.firstName) ||
      (row?.lastName && values?.lastName && row?.lastName === values?.lastName ? null : values?.lastName) ||
      (row?.address && values?.address && row?.address === values?.address ? null : values?.address) ||
      (row?.phoneNumber && values?.phoneNumber && row?.phoneNumber === values?.phoneNumber
        ? null
        : values?.phoneNumber) ||
      (row?.role === values?.role ? null : values?.role)
    ) {
      setUpdateBtnEnable(true);
    } else {
      setUpdateBtnEnable(false);
    }
  }, [
    user.id,
    row?.id,
    row?.firstName,
    row?.lastName,
    row?.address,
    row?.role,
    row?.phoneNumber,
    values?.firstName,
    values?.lastName,
    values?.address,
    values?.role,
    values?.phoneNumber,
  ]);
  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={onClose} onBackdropClick={handleCancel}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ p: 3 }}>
              <Box>
                <RHFUploadAvatar
                  name="avatarUrl"
                  accept={{
                    'image/*': ['.png'],
                    'image/jpeg': ['.jpg', '.jpeg'],
                  }}
                  maxSize={31457280}
                  onDrop={handleDrop}
                  helperText={
                    <Typography
                      variant="caption"
                      sx={{ mt: 2, mx: 'auto', display: 'block', textAlign: 'center', color: 'text.secondary' }}
                    >
                      Định dạng ảnh *.jpeg, *.jpg, *.png <br /> Dung lượng tối đa {fData(31457280)}
                    </Typography>
                  }
                />
                {row?.group !== 'root' && row?.role !== user.role && (
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 6 }}>
                    <RHFSelect
                      name="role"
                      label="Chức vụ"
                      onChange={(event) => {
                        setValue('role', event.target.value);
                      }}
                    >
                      {Roles.map((option) => (
                        <option key={option.name} value={option.name}>
                          {option.label}
                        </option>
                      ))}
                    </RHFSelect>
                  </Stack>
                )}
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ p: 3 }}>
              <RHFTextField name="lastName" label="Họ" />
              <RHFTextField name="firstName" label="Tên" sx={{ mt: 4 }} />
              <RHFTextField name="phoneNumber" label="Số điện thoại" sx={{ mt: 4 }} />
              <RHFTextField name="address" label="Địa chỉ" sx={{ mt: 4 }} />
              <Grid container justifyContent="flex-end" sx={{ mt: 4 }}>
                <Grid item>
                  <LoadingButton variant="contained" onClick={handleCancel}>
                    Hủy
                  </LoadingButton>
                </Grid>
                <Grid item sx={{ ml: 1 }}>
                  <LoadingButton disabled={!updateBtnEnable} type="submit" variant="contained" loading={isSubmitting}>
                    Lưu
                  </LoadingButton>
                </Grid>

                <CommonBackdrop loading={isSubmitting || loadingUpdate} />
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </FormProvider>
    </Dialog>
  );
}
