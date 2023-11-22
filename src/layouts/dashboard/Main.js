import React, { useState } from 'react';
import { Box, Divider, IconButton, Stack, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Gear } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { navButtonsUser, navButtonsAdmin, Role } from '../../_apis_/data';
import Logo from '../../components/Logo';
import useAuth from '../../hooks/useAuth';
import AccountPopover from './header/AccountPopover';
import NotificationsPopover from './header/NotificationsPopover';

// eslint-disable-next-line consistent-return
const getPathUser = (index) => {
  switch (index) {
    case 0:
      return '/dashboard/app';

    case 1:
      return '/dashboard/danh-ba';

    case 2:
      return '/dashboard/goi-dien';

    case 3:
      return '/dashboard/muc-ghim';

    case 4:
      return '/dashboard/cai-dat';

    default:
      return '/';
  }
};

const getPathAdmin = (index) => {
  switch (index) {
    case 0:
      return '/dashboard/app';

    case 1:
      return '/dashboard/danh-ba';

    case 2:
      return '/dashboard/goi-dien';

    case 3:
      return '/dashboard/muc-ghim';

    case 4:
      return '/dashboard/nguoi-dung';
    case 5:
      return '/dashboard/cai-dat';

    default:
      return '/';
  }
};

const SideBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const { user } = useAuth();

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
        height: '100vh',
        width: 100,
        display: 'flex',
      }}
    >
      <Stack
        direction="column"
        alignItems={'center'}
        justifyContent="space-between"
        sx={{ width: '100%', height: '100%' }}
        spacing={3}
      >
        <Stack alignItems={'center'} spacing={4}>
          <Logo />
          {user.role === Role.admin && (
            <Stack sx={{ width: 'max-content' }} direction="column" alignItems="center" spacing={3}>
              {navButtonsAdmin.map((el) =>
                el.index === selected ? (
                  <Box key={''} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                    <Tooltip title={el.tooltip}>
                      <IconButton sx={{ width: 'max-content', color: '#fff' }} key={el.index}>
                        {el.icon}
                      </IconButton>
                    </Tooltip>
                  </Box>
                ) : (
                  <Tooltip key={el.index} title={el.tooltip}>
                    <IconButton
                      onClick={() => {
                        setSelected(el.index);
                        navigate(getPathAdmin(el.index));
                      }}
                      sx={{
                        width: 'max-content',
                        color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary,
                      }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  </Tooltip>
                )
              )}
              <Divider sx={{ width: '48px' }} />
              {selected === 5 ? (
                <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                  <Tooltip title="Cài đặt">
                    <IconButton sx={{ width: 'max-content', color: '#fff' }}>
                      <Gear />
                    </IconButton>
                  </Tooltip>
                </Box>
              ) : (
                <Tooltip title="Cài đặt">
                  <IconButton
                    onClick={() => {
                      setSelected(5);
                      navigate(getPathAdmin(5));
                    }}
                    sx={{
                      width: 'max-content',
                      color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary,
                    }}
                  >
                    <Gear />
                  </IconButton>
                </Tooltip>
              )}
            </Stack>
          )}
          {user.role === Role.user && (
            <Stack sx={{ width: 'max-content' }} direction="column" alignItems="center" spacing={3}>
              {navButtonsUser.map((el) =>
                el.index === selected ? (
                  <Box key={''} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                    <Tooltip title={el.tooltip}>
                      <IconButton sx={{ width: 'max-content', color: '#fff' }} key={el.index}>
                        {el.icon}
                      </IconButton>
                    </Tooltip>
                  </Box>
                ) : (
                  <Tooltip key={el.index} title={el.tooltip}>
                    <IconButton
                      onClick={() => {
                        setSelected(el.index);
                        navigate(getPathUser(el.index));
                      }}
                      sx={{
                        width: 'max-content',
                        color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary,
                      }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  </Tooltip>
                )
              )}
              <Divider sx={{ width: '48px' }} />
              {selected === 4 ? (
                <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                  <Tooltip title="Cài đặt">
                    <IconButton sx={{ width: 'max-content', color: '#fff' }}>
                      <Gear />
                    </IconButton>
                  </Tooltip>
                </Box>
              ) : (
                <Tooltip title="Cài đặt">
                  <IconButton
                    onClick={() => {
                      setSelected(4);
                      navigate(getPathUser(4));
                    }}
                    sx={{
                      width: 'max-content',
                      color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary,
                    }}
                  >
                    <Gear />
                  </IconButton>
                </Tooltip>
              )}
            </Stack>
          )}
        </Stack>

        <Stack spacing={4}>
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
