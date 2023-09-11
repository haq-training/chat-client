import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Divider, Drawer, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import useResponsive from '../../../hooks/useResponsive';
import { NAV } from '../../../config-global';
import { Scrollbar } from '../../../components/scrollbar';
import { NavSectionVertical } from '../../../components/nav-section';
import NavToggleButton from './NavToggleButton';
import Logo from '../../../components/Logo';
import useAuth from '../../../hooks/useAuth';
import commonNavConfig from './NavConfig';
// import AccountPopover from '../header/AccountPopover';
import NotificationsPopover from '../header/NotificationsPopover';

// ----------------------------------------------------------------------
const AccPopoverStyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0.5, 0),
  // borderRadius: Number(theme.shape.borderRadius) * 1.5,
  // backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));
// ----------------------------------------------------------------------

NavVertical.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
  setMessageIncome: PropTypes.func.isRequired,
};

export default function NavVertical({ openNav, onCloseNav, setMessageIncome }) {
  const { pathname } = useLocation();
  const { user } = useAuth();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        spacing={1}
        sx={{
          pt: 3,
          // pb: 2,
          pl: 2,
          pr: 2.5,
          flexShrink: 0,
        }}
      >
        <Logo cusHeight={30} cusWidth={80} />

        <AccPopoverStyledRoot>
          <Stack spacing={1}>
            <NotificationsPopover setMessageIncome={setMessageIncome} />
            <Stack direction="row" alignItems="center">
              <Typography sx={{ ml: 1 }} variant="subtitle1" fontWeight={500}>
                {user?.displayName}
              </Typography>
            </Stack>
          </Stack>
        </AccPopoverStyledRoot>
      </Stack>
      <Divider sx={{ borderStyle: 'dashed', paddingY: 1 }} />

      <NavSectionVertical data={commonNavConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_BASE },
      }}
    >
      <NavToggleButton />

      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_BASE,
              bgcolor: 'transparent',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
