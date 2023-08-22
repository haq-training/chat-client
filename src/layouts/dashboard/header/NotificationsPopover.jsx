// noinspection JSUnresolvedReference

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { loader } from 'graphql.macro';
import { useSnackbar } from 'notistack';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import MenuPopover from '../../../components/MenuPopover';
import { IconButtonAnimate } from '../../../components/animate';
import useAuth from '../../../hooks/useAuth';
import NotificationDialog from '../../../sections/@dashboard/notification/NotificationDialog';
import useToggle from '../../../hooks/useToggle';

// ----------------------------------------------------------------------
const SUBSCRIPTION = loader('../../../graphql/subscription/subscribeNotifications.graphql');
const NOTIFICATION = loader('../../../graphql/queries/userNotification/listUserNotification.graphql');
const NOTIFICATION_UPDATE = loader('../../../graphql/mutations/userNotification/updateStatusUserNotification.graphql');
// ----------------------------------------------------------------------

NotificationsPopover.propTypes = {
  setMessageIncome: PropTypes.func.isRequired,
};
export default function NotificationsPopover({ setMessageIncome }) {
  const { user } = useAuth();

  const { enqueueSnackbar } = useSnackbar();

  const [getListUserNotification, setGetListUserNotification] = useState([]);
  const [newOderNotifications, setNewOderNotifications] = useState([]);
  const [otherNotifications, setOtherNotifications] = useState([]);

  const { data, loading } = useSubscription(SUBSCRIPTION, {
    variables: { input: { userId: Number(user.id) } },
  });

  const { data: listNotification, refetch } = useQuery(NOTIFICATION, {
    variables: { input: { userId: Number(user.id) } },
  });
  useEffect(() => {
    if (listNotification) {
      setGetListUserNotification(listNotification.listUserNotification?.edges.map((el) => el.node));
    }
  }, [listNotification]);
  useEffect(() => {
    if (listNotification) {
      setNewOderNotifications(
        getListUserNotification.filter((newOderNotifications) => newOderNotifications.notification.event === 'NewOrder')
      );
      setOtherNotifications(
        getListUserNotification.filter((newOderNotifications) => newOderNotifications.notification.event !== 'NewOrder')
      );
    }
  }, [listNotification, getListUserNotification]);

  const [update] = useMutation(NOTIFICATION_UPDATE, {
    onCompleted: () => {
      refetch().catch((error) => {
        console.error(error);
      });
    },
    refetchQueries: () => [
      {
        query: NOTIFICATION,
        variables: { variables: { input: { userId: Number(user.id) } } },
      },
    ],
    onError: (error) => {
      enqueueSnackbar(`error-${error.message}`, {
        variant: 'error',
      });
    },
  });

  const totalUnRead = getListUserNotification.filter((item) => item.isRead === false).length;

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  useEffect(() => {
    if (!loading && data) {
      setMessageIncome(data?.subscribeNotifications);
      enqueueSnackbar(`${data.subscribeNotifications?.message}`, {
        variant: 'success',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data]);

  const handleUpdate = async (id, isRead) => {
    await update({
      variables: { input: { userNotificationIds: Number(id), isRead } },
    });
    // handleClose();
  };

  return (
    <>
      <IconButtonAnimate color={open ? 'primary' : 'secondary'} onClick={handleOpen} sx={{ width: 24, height: 32 }}>
        <Badge badgeContent={totalUnRead} color="error">
          <Iconify icon="eva:bell-fill" width={28} height={28} />
        </Badge>
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{ width: 360, p: 0, mt: 1.5, ml: 0.75 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Thông báo</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Bạn có {totalUnRead} tin nhắn chưa đọc
            </Typography>
          </Box>

          {/* {totalUnRead > 0 && ( */}
          {/*  <Tooltip title="Đánh dấu đã đọc tất cả thông báo"> */}
          {/*    <IconButtonAnimate color="primary" onClick={handleMarkAllAsRead}> */}
          {/*      <Iconify icon="eva:done-all-fill" width={20} height={20} /> */}
          {/*    </IconButtonAnimate> */}
          {/*  </Tooltip> */}
          {/* )} */}
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                Thông báo đơn hàng
              </ListSubheader>
            }
          >
            {newOderNotifications.slice(0, 3).map((notification) => (
              <NotificationItem
                key={notification.notification.id}
                notifications={notification}
                onUpdate={() => handleUpdate(notification.idUserNotification, true)}
              />
            ))}
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                Thông báo khác
              </ListSubheader>
            }
          >
            {otherNotifications.slice(0, 3).map((notification) => (
              <NotificationItem
                key={notification.notification.id}
                notifications={notification}
                onUpdate={() => handleUpdate(notification.idUserNotification, true)}
              />
            ))}
          </List>
        </Scrollbar>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple disabled>
            Xem tất cả thông báo
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}

// ----------------------------------------------------------------------

NotificationItem.propTypes = {
  notifications: PropTypes.shape({
    notification: PropTypes.object,
    isRead: PropTypes.bool,
    content: PropTypes.string,
  }),
  onUpdate: PropTypes.func,
};

function NotificationItem({ notifications, onUpdate }) {
  const { notification, isRead } = notifications;
  const { toggle: openFrom, onOpen: onOpenFrom, onClose: onCloseFrom } = useToggle();
  return (
    <>
      <ListItemButton
        sx={{
          py: 1.5,
          px: 2.5,
          mt: '1px',
          ...(!isRead && {
            bgcolor: 'action.selected',
          }),
        }}
        onClick={() => {
          onUpdate();
          onOpenFrom();
        }}
      >
        <ListItemText
          primary={notification?.content}
          secondary={
            <Typography
              variant="body2"
              sx={{
                mt: 0.5,
                display: 'flex',
                alignItems: 'center',
                color: 'text.disabled',
              }}
            >
              <Iconify icon="eva:clock-outline" sx={{ mr: 0.5, width: 16, height: 16 }} />
            </Typography>
          }
        />
      </ListItemButton>
      <NotificationDialog open={openFrom} onClose={onCloseFrom} notification={notification} />
    </>
  );
}

// ----------------------------------------------------------------------
//
// function renderContent(notification) {
//   const title = (
//     <Typography variant="subtitle2">
//       {notification.title}
//       <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
//         &nbsp; {notification.description}
//       </Typography>
//     </Typography>
//   );
//
//   if (notification.type === 'order_placed') {
//     return {
//       avatar: (
//         <img
//           alt={notification.title}
//           src="https://minimal-assets-api.vercel.app/assets/icons/ic_notification_package.svg"
//         />
//       ),
//       title,
//     };
//   }
//   if (notification.type === 'order_shipped') {
//     return {
//       avatar: (
//         <img
//           alt={notification.title}
//           src="https://minimal-assets-api.vercel.app/assets/icons/ic_notification_shipping.svg"
//         />
//       ),
//       title,
//     };
//   }
//   if (notification.type === 'mail') {
//     return {
//       avatar: (
//         <img
//           alt={notification.title}
//           src="https://minimal-assets-api.vercel.app/assets/icons/ic_notification_mail.svg"
//         />
//       ),
//       title,
//     };
//   }
//   if (notification.type === 'chat_message') {
//     return {
//       avatar: (
//         <img
//           alt={notification.title}
//           src="https://minimal-assets-api.vercel.app/assets/icons/ic_notification_chat.svg"
//         />
//       ),
//       title,
//     };
//   }
//   return {
//     avatar: notification.avatar ? <img alt={notification.title} src={notification.avatar} /> : null,
//     title,
//   };
// }
