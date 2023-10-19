import { styled, useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import MyAvatar from '../../components/MyAvatar';
import UserInfoPersonalPopup from '../../sections/@dashboard/profile/updateUser';
import useToggle from '../../hooks/useToggle';
import Iconify from '../../components/Iconify';

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200],
}));
const RowStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(1.5),
}));

export default function UserAccount() {
  const { user } = useAuth();
  const theme = useTheme();

  const [setDataUserInfo] = useState();
  const [setIsEdit] = useState(false);

  const { toggle: isOpenUserInfoPopup, onOpen: onOpenUserInfoPopup, onClose: onCloseUserInfoPopup } = useToggle();
  const handleUpdateUserInformation = (dataInfo) => {
    setDataUserInfo(dataInfo);
    setIsEdit(true);
    onCloseUserInfoPopup();
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: 320,
          backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
          boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
        }}
      >
        <Stack p={3} spacing={2}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h5">My Profile</Typography>
            <IconButton onClick={onOpenUserInfoPopup}>
              <Iconify icon={'line-md:edit-twotone'} sx={{ mr: 1, height: 16, color: 'info.main' }} />
            </IconButton>
          </Stack>
          <AccountStyle>
            <MyAvatar sx={{ width: 56, height: 56 }} />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {user?.firstName} {user?.lastName}
              </Typography>
            </Box>
          </AccountStyle>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ py: 2, pr: 1, pl: 2.5 }}>
            <div>
              <RowStyle>
                <Typography variant="h6" sx={{ color: 'text.primary' }}>
                  {user?.story}
                </Typography>
              </RowStyle>
              <RowStyle>
                <Iconify icon={'tdesign:assignment-user'} sx={{ mr: 1, height: 16, color: 'info.main' }} />
                <Typography variant={'body2'}>
                  Name: {user?.firstName} {user?.lastName}
                </Typography>
              </RowStyle>
              <RowStyle>
                <Iconify icon={'line-md:email-twotone'} sx={{ mr: 1, height: 16, color: 'info.main' }} />
                <Typography variant="body2">Email: {user?.email}</Typography>
              </RowStyle>
              <RowStyle>
                <Iconify icon={'carbon:location-filled'} sx={{ mr: 1, height: 16, color: 'info.main' }} />
                <Typography variant="body2">Quê quán: {user?.location}</Typography>
              </RowStyle>
            </div>
            <Stack>
              <UserInfoPersonalPopup
                isOpen={isOpenUserInfoPopup}
                onClose={onCloseUserInfoPopup}
                user={user}
                handleUpdate={handleUpdateUserInformation}
              />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
