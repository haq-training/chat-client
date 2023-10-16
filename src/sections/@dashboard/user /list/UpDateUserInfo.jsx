import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { DialogContent, Grid, Typography } from '@mui/material';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import Iconify from '../../../../components/Iconify';
import { DialogAnimate } from '../../../../components/animate';
import useAuth from '../../../../hooks/useAuth';
import { fYearMonthDay } from '../../../../utils/formatTime';
import { Role } from '../../../../constant';

// ----------------------------------------------------------------------
const GET_USER_INFO = loader('../../../../graphql/queries/user/getUserInformation.graphql');

// ----------------------------------------------------------------------
const RowStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(1.5),
}));

// ----------------------------------------------------------------------

UpDateUserInfo.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  userId: PropTypes.number,
  handleAdd: PropTypes.func,
  handleUpdate: PropTypes.func,
};

export default function UpDateUserInfo({ handleUpdate, handleAdd, isOpen, onClose, userId }) {
  const { user } = useAuth();
  const [dataInfo, setDataInfo] = useState();
  const { data: getUserInfo } = useQuery(GET_USER_INFO, {
    variables: {
      userId,
    },
  });
  useEffect(() => {
    if (getUserInfo) {
      setDataInfo(getUserInfo?.getUserInformationById);
    }
  }, [getUserInfo]);
  const handleCancel = () => {
    onClose();
  };

  return (
    <DialogAnimate fullWidth maxWidth="xs" open={isOpen} onClose={onClose}>
      {dataInfo ? (
        <DialogContent sx={{ pt: 5, pb: 5, textAlign: 'center' }}>
          <Typography variant="h6">{dataInfo?.user?.fullName}</Typography>

          <RowStyle>
            <Iconify icon={'carbon:location-filled'} sx={{ mr: 1, width: 16, height: 16, color: 'info.main' }} />
            <Typography variant="body2">Quê quán: {dataInfo?.homeTown}</Typography>
          </RowStyle>

          <RowStyle>
            <Iconify icon={'fluent-mdl2:date-time'} sx={{ mr: 1, width: 16, height: 16, color: 'info.main' }} />
            <Typography variant="body2">Ngày sinh: {fYearMonthDay(dataInfo?.dateOfBirth)}</Typography>
          </RowStyle>

          <RowStyle>
            <Iconify icon={'ph:phone-fill'} sx={{ mr: 1, width: 16, height: 16, color: 'info.main' }} />
            <Typography variant="body2">
              Số điện thoại: {dataInfo?.numberPhone ? dataInfo?.user.phoneNumber : dataInfo?.numberPhone}
            </Typography>
          </RowStyle>

          <RowStyle>
            <Iconify icon="icon-park-solid:edit-name" sx={{ mr: 1, width: 16, height: 16, color: 'info.main' }} />
            <Typography variant="body2">Họ tên của cha: {dataInfo?.fatherFullName}</Typography>
          </RowStyle>
          <RowStyle>
            <Iconify icon="fluent-mdl2:date-time" sx={{ mr: 1, width: 16, height: 16, color: 'info.main' }} />
            <Typography variant="body2">
              Ngày sinh của cha:{' '}
              {dataInfo?.fatherDateOfBirth !== null ? fYearMonthDay(dataInfo?.fatherDateOfBirth) : null}
            </Typography>
          </RowStyle>
          <RowStyle>
            <Iconify icon="icon-park-solid:edit-name" sx={{ mr: 1, width: 16, height: 16, color: 'info.main' }} />
            <Typography variant="body2">Họ tên của mẹ: {dataInfo?.motherFullName}</Typography>
          </RowStyle>
          <RowStyle>
            <Iconify icon="fluent-mdl2:date-time" sx={{ mr: 1, width: 16, height: 16, color: 'info.main' }} />
            <Typography variant="body2">
              Ngày sinh của mẹ:{' '}
              {dataInfo?.motherDateOfBirth !== null ? fYearMonthDay(dataInfo?.motherDateOfBirth) : null}
            </Typography>
          </RowStyle>
          <RowStyle>
            <Iconify icon="fluent-mdl2:date-time" sx={{ mr: 1, width: 16, height: 16, color: 'info.main' }} />
            <Typography variant="body2">Ghi chú: {dataInfo?.note}</Typography>
          </RowStyle>
          {(Number(userId) === Number(user.id) || user.role === Role.admin || user.role === Role.director) && (
            <Grid container justifyContent="flex-end" sx={{ mt: 4 }}>
              <Grid item>
                <LoadingButton variant="contained" onClick={handleCancel}>
                  Đóng
                </LoadingButton>
              </Grid>
              <Grid item sx={{ ml: 1 }}>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  onClick={() => {
                    handleUpdate(dataInfo);
                  }}
                >
                  Sửa
                </LoadingButton>
              </Grid>
            </Grid>
          )}
        </DialogContent>
      ) : (
        <DialogContent sx={{ pt: 5, pb: 5, textAlign: 'center' }}>
          <Typography variant="h6">Người dùng chưa có thông tin cá nhân !</Typography>
          {(Number(userId) === Number(user.id) || user.role === Role.admin || user.role === Role.director) && (
            <Grid container justifyContent="flex-end" sx={{ mt: 4 }}>
              <Grid item>
                <LoadingButton variant="contained" onClick={handleCancel}>
                  Đóng
                </LoadingButton>
              </Grid>
              <Grid item sx={{ ml: 1 }}>
                <LoadingButton type="submit" variant="contained" onClick={handleAdd}>
                  Thêm
                </LoadingButton>
              </Grid>
            </Grid>
          )}
        </DialogContent>
      )}
    </DialogAnimate>
  );
}
