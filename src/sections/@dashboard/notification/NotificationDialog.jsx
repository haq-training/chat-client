import PropTypes from 'prop-types';
import { Dialog, DialogContent, Stack, Typography } from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';
// import { SSM_PATH_DASHBOARD } from '../../../../../sm-client/src/routes/paths';
// import Iconify from '../../../../../sm-client/src/components/Iconify';
// import { fddMMYYYYWithSlash } from '../../../../../sm-client/src/utils/formatTime';

// ----------------------------------------------------------------------

NotificationDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  notification: PropTypes.object,
};

export default function NotificationDialog({ open, onClose, notification }) {
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogContent sx={{ px: 3, pt: 3, pb: 4.5 }}>
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ pb: 1 }}>
          <Typography variant="h5"> Thông báo </Typography>
        </Stack>

        <Stack direction="row" spacing={3} alignItems="center" justifyContent="space-around">
          {notification?.Order ? <></> : null}
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography
            variant="subtitle1"
            alignSelf="center"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            {notification?.content}
          </Typography>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
