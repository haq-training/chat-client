import { Box, Divider, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { NAV } from '../../../config-global';
import { hideScrollbarX } from '../../../utils/cssStyles';
import { NavSectionMini } from '../../../components/nav-section';
import NavToggleButton from './NavToggleButton';
import Logo from '../../../components/Logo';
import commonNavConfig from './NavConfig';
import useAuth from '../../../hooks/useAuth';
import AccountPopover from '../header/AccountPopover';
import NotificationsPopover from '../header/NotificationsPopover';

// ----------------------------------------------------------------------
export const AccountPopoverStyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0.5, 2.5),
  // borderRadius: Number(theme.shape.borderRadius) * 1.5,
  // backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));
// ----------------------------------------------------------------------
NavMini.propTypes = {
  setMessageIncome: PropTypes.func.isRequired,
};
export default function NavMini({ setMessageIncome }) {
  const { user } = useAuth();
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD_MINI },
      }}
    >
      <NavToggleButton
        sx={{
          top: 36,
          left: NAV.W_DASHBOARD_MINI - 12,
        }}
      />

      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: 'fixed',
          width: NAV.W_DASHBOARD_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScrollbarX,
        }}
      >
        <Logo sx={{ mx: 'auto', mt: 2, mb: 1 }} cusWidth={86} cusHeight={30} wrapperWidth={100} wrapperHeight={36} />

        <AccountPopoverStyledRoot>
          <Stack spacing={1}>
            <NotificationsPopover setMessageIncome={setMessageIncome} />
            <AccountPopover />
          </Stack>
        </AccountPopoverStyledRoot>

        <Divider sx={{ borderStyle: 'dashed', paddingY: 1 }} />

        <NavSectionMini data={commonNavConfig(user)} />
      </Stack>
    </Box>
  );
}
