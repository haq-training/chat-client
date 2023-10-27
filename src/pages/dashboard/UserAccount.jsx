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
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(2, 2, 2, 2),
}));
const RowStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(5),
}));

export default function UserAccount() {
  const { user } = useAuth();
  const theme = useTheme();

  const [setDataUserInfo] = useState();

  const { toggle: isOpenUserInfoPopup, onOpen: onOpenUserInfoPopup, onClose: onCloseUserInfoPopup } = useToggle();
  const handleUpdateUserInformation = (dataInfo) => {
    setDataUserInfo(dataInfo);
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
            <Typography variant="h4">My Profile</Typography>
            <IconButton onClick={onOpenUserInfoPopup}>
              <Iconify icon={'line-md:edit-twotone'} sx={{ mr: 1, height: 20, color: 'info.main' }} />
            </IconButton>
          </Stack>

          <AccountStyle>
            <MyAvatar sx={{ width: 132, height: 132, mb: 1 }} />
            <Box sx={{ ml: 2 }}>
              <Typography
                sx={{
                  color: 'text.primary',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                {user?.firstName} {user?.lastName}
              </Typography>
            </Box>
          </AccountStyle>

          <Stack direction="row" alignItems="center">
            <Box>
              <RowStyle>
                <Typography variant="body2" sx={{ color: 'text.primary', fontSize: 18, fontWeight: 'medium' }}>
                  {user?.story}
                </Typography>
              </RowStyle>

              <RowStyle>
                <Iconify icon={'tdesign:assignment-user'} sx={{ mr: 1, height: 36, width: 36, color: 'info.main' }} />
                <Typography variant={'body2'} sx={{ fontSize: 18 }}>
                  Name: {user?.firstName} {user?.lastName}
                </Typography>
              </RowStyle>

              <RowStyle>
                <Iconify icon={'line-md:email-twotone'} sx={{ mr: 1, height: 36, width: 36, color: 'info.main' }} />
                <Typography variant={'body2'} sx={{ fontSize: 18 }}>
                  Email: {user?.email}
                </Typography>
              </RowStyle>

              <RowStyle>
                <Iconify icon={'carbon:location-filled'} sx={{ mr: 1, height: 36, width: 36, color: 'info.main' }} />
                <Typography variant={'body2'} sx={{ fontSize: 18 }}>
                  Quê quán: {user?.location}
                </Typography>
              </RowStyle>
            </Box>
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
