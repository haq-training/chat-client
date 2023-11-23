// noinspection JSUnresolvedReference

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import SimpleBarReact from 'simplebar-react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
// import { loader } from 'graphql.macro';
// import { useMutation } from '@apollo/client';
import { File } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import { useSnackbar } from 'notistack';
import useAuth from '../../../hooks/useAuth';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';

import MenuPopover from '../../../components/MenuPopover';
import { IconButtonAnimate } from '../../../components/animate';
import NotificationDialog from '../../../sections/@dashboard/notification/NotificationDialog';
import useToggle from '../../../hooks/useToggle';
import ContactElement from '../../../components/ContacElement';
// import BlockElement from '../../../sections/@dashboard/contacts/blockElement';

// ----------------------------------------------------------------------
const LIST_FRIENDS = loader('../../../graphql/queries/user/listFriends.graphql');
// ----------------------------------------------------------------------

export default function NotificationsPopover() {
  const [getListUserNotification] = useState([]);
  // const [newOderNotifications] = useState([]);
  // const [otherNotifications] = useState([]);
  // const [notifications, setNotifications] = useState([]);
  // const [markAsReadAllNotifications] = useMutation(LIST_FRIENDS);

  // const { data, loading } = useSubscription(SUBSCRIPTION, {
  //   variables: { input: { userId: Number(user.id) } },
  // });

  // const { data: listNotification, refetch } = useQuery(NOTIFICATION, {
  //   variables: { input: { userId: Number(user.id) } },
  // });
  // useEffect(() => {
  //   if (listNotification) {
  //     setGetListUserNotification(listNotification.listUserNotification?.edges.map((el) => el.node));
  //   }
  // }, [listNotification]);
  // useEffect(() => {
  //   if (listNotification) {
  //     setNewOderNotifications(
  //       getListUserNotification.filter((newOderNotifications) => newOderNotifications.notification.event === 'NewOrder')
  //     );
  //     setOtherNotifications(
  //       getListUserNotification.filter((newOderNotifications) => newOderNotifications.notification.event !== 'NewOrder')
  //     );
  //   }
  // }, [listNotification, getListUserNotification]);
  //
  // const [update] = useMutation(NOTIFICATION_UPDATE, {
  //   onCompleted: () => {
  //     refetch().catch((error) => {
  //       console.error(error);
  //     });
  //   },
  //   refetchQueries: () => [
  //     {
  //       query: NOTIFICATION,
  //       variables: { variables: { input: { userId: Number(user.id) } } },
  //     },
  //   ],
  //   onError: (error) => {
  //     enqueueSnackbar(`error-${error.message}`, {
  //       variant: 'error',
  //     });
  //   },
  // });

  const totalUnRead = getListUserNotification.filter((item) => item.isRead === false).length;

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const [friends, setFriends] = useState([]);

  const { data: listFriends } = useQuery(LIST_FRIENDS);

  useEffect(() => {
    if (listFriends && listFriends.listFriend) {
      setFriends(listFriends.listFriend);
    }
  }, [listFriends]);

  console.log('fr', friends);

  // useEffect(() => {
  //   if (!loading && data) {
  //     setMessageIncome(data?.subscribeNotifications);
  //     enqueueSnackbar(`${data.subscribeNotifications?.message}`, {
  //       variant: 'success',
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loading, data]);
  //
  // const handleUpdate = async (id, isRead) => {
  //   await update({
  //     variables: { input: { userNotificationIds: Number(id), isRead } },
  //   });
  //   // handleClose();
  // };
  // const handleMarkAllAsRead = async () => {
  //   await markAsReadAllNotifications({ variables: { userId: user.id } });
  //   setNotifications(
  //     notifications.map((notification) => ({
  //       ...notification,
  //       is_read: true,
  //     }))
  //   );
  // };

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
          <Tooltip title="Đánh dấu đã đọc tất cả thông báo">
            <IconButtonAnimate color="primary">
              <Iconify icon="eva:done-all-fill" width={20} height={20} />
            </IconButtonAnimate>
          </Tooltip>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack key={friends} spacing={2} direction="column" sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}>
          <Stack spacing={2.4}>
            <Typography variant="h6" sx={{ color: '#676767' }}>
              Danh bạ
            </Typography>
            {friends.follower?.map((el, row) => (
              <NotificationItem key={el.id} {...el} row={row} />
            ))}
          </Stack>
        </Stack>

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
  firstName: PropTypes.string,
  avatarUrl: PropTypes.string,
  lastName: PropTypes.string,
};

function NotificationItem({ firstName, avatarUrl, lastName }) {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const { toggle: openFrom, onOpen: onOpenFrom, onClose: onCloseFrom } = useToggle();
  const [friends, setFriends] = useState([]);
  const { data: listFriends } = useQuery(LIST_FRIENDS);

  useEffect(() => {
    if (listFriends && listFriends.listFriend) {
      setFriends(listFriends.listFriend);
    }
  }, [listFriends]);

  const follower = friends.follower?.[0].id;

  console.log('fo', follower);

  console.log('fl', friends.follower);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          borderRadius: 1,
          backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
        }}
        p={2}
      >
        <Stack direction="row" display="flex" justifyContent="space-between">
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{
              textOverflow: 'clip',
              overflow: 'hidden',
              width: '100%',
            }}
          >
            <Avatar alt={firstName} src={avatarUrl} />

            <Stack spacing={0.3} textOverflow="ellipsis" overflow="hidden">
              <Typography variant="subtitle2" sx={{ ml: 2, fontSize: 16 }}>
                {firstName} {lastName}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <NotificationDialog open={openFrom} onClose={onCloseFrom} />
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
