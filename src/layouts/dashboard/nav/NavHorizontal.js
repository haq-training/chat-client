import PropTypes from 'prop-types';
import { memo } from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import { bgBlur } from '../../../utils/cssStyles';
import { NavSectionHorizontal } from '../../../components/nav-section';
import useAuth from '../../../hooks/useAuth';
import commonNavConfig from './NavConfig';
import NotificationsPopover from '../header/NotificationsPopover';
import AccountPopover from '../header/AccountPopover';
import { AccountPopoverStyledRoot } from './NavMini';
import Searchbar from '../header/Searchbar';

// ----------------------------------------------------------------------
NavHorizontal.propTypes = {
  setMessageIncome: PropTypes.func.isRequired,
};

function NavHorizontal({ setMessageIncome }) {
  const theme = useTheme();
  const { user } = useAuth();
  return (
    <AppBar
      component="nav"
      color="transparent"
      sx={{
        boxShadow: 0,
        // top: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
        top: 0,
      }}
    >
      <Toolbar
        sx={{
          ...bgBlur({
            color: theme.palette.background.default,
          }),
        }}
      >
        <Searchbar />
        <NavSectionHorizontal data={commonNavConfig(user)} />
        <AccountPopoverStyledRoot>
          <Stack direction="row" alignItems="center" spacing={2}>
            <AccountPopover />
            <NotificationsPopover setMessageIncome={setMessageIncome} />
          </Stack>
        </AccountPopoverStyledRoot>
      </Toolbar>

      <Shadow />
    </AppBar>
  );
}

export default memo(NavHorizontal);

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        width: 1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
