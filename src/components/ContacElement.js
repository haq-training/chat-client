import PropTypes from 'prop-types';
import { Avatar, Box, IconButton, MenuItem, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { loader } from 'graphql.macro';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useSnackbar } from 'notistack';
import StyledBadge from './StyledBadge';
import MenuPopover from './MenuPopover';
import Iconify from './Iconify';

//----------------------------------------------------------------------------------
const LIST_FRIENDS = loader('../graphql/queries/user/listFriends.graphql');
const UNFRIEND = loader('../graphql/mutations/user/unFriend.graphql');
const BLOCK_USER = loader('../graphql/mutations/user/blockUser.graphql');
//----------------------------------------------------------------------------------

ContactElement.propTypes = {
  firstName: PropTypes.string,
  avatarUrl: PropTypes.string,
  lastName: PropTypes.string,
  online: PropTypes.bool,
};
function ContactElement({ firstName, avatarUrl, lastName, online }) {
  const { enqueueSnackbar } = useSnackbar();

  const theme = useTheme();

  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  const [open, setOpen] = useState(null);

  const [friends, setFriends] = useState([]);

  const { data: listFriends } = useQuery(LIST_FRIENDS);

  useEffect(() => {
    if (listFriends && listFriends.listFriend) {
      setFriends(listFriends.listFriend);
    }
  }, [listFriends]);

  const friend = friends.friend?.[0].id;

  const [blockUser] = useMutation(BLOCK_USER, {
    onCompleted: () => {
      enqueueSnackbar('Đã chặn đối phương!', {
        variant: 'success',
        enqueueSnackbar,
      });
    },
    refetchQueries: () => [
      {
        query: LIST_FRIENDS,
      },
    ],

    onError: (error) => {
      enqueueSnackbar(`Không thể chặn đối tượng này. Nguyên nhân: ${error.message}`, {
        variant: 'error',
      });
    },
  });

  const [unFriend] = useMutation(UNFRIEND, {
    onCompleted: () => {
      enqueueSnackbar('Hủy kết bạn thành công!', {
        variant: 'success',
      });
    },
    refetchQueries: () => [
      {
        query: LIST_FRIENDS,
      },
    ],

    onError: (error) => {
      enqueueSnackbar(`Hủy kết bạn  không thành công. Nguyên nhân: ${error.message}`, {
        variant: 'error',
      });
    },
  });
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log('You clicked submit.');
  };

  const handleBlockUser = async (id) => {
    await blockUser({
      variables: {
        id: Number(id),
      },
    });
  };
  const handleUnfriend = async (id) => {
    await unFriend({
      variables: {
        id: Number(id),
      },
    });
  };
  return (
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
          {online ? (
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
              <Avatar alt={firstName} src={avatarUrl} />
            </StyledBadge>
          ) : (
            <Avatar alt={firstName} src={avatarUrl} />
          )}

          <Stack spacing={0.3} textOverflow="ellipsis" overflow="hidden">
            <Typography variant="subtitle2" sx={{ ml: 2, fontSize: 16 }}>
              {firstName} {lastName}
            </Typography>
          </Stack>

          <MenuPopover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            arrow="right-top"
            sx={{
              mt: -0.5,
              width: 'auto',
              '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
            }}
          >
            <MenuItem onSubmit={handleClick} sx={{ color: 'info.main' }}>
              <Iconify icon={'basil:chat-solid'} sx={{ ...ICON }} />
              Nhắn tin
            </MenuItem>

            <MenuItem key={friend} onClick={() => handleBlockUser(friend)}>
              <Iconify icon={'solar:user-block-bold'} sx={{ ...ICON }} />
              Chặn
            </MenuItem>

            <MenuItem key={friend} onClick={() => handleUnfriend(friend)} sx={{ color: 'error.main' }}>
              <Iconify icon={'eva:trash-2-outline'} sx={{ ...ICON }} />
              Hủy kết bạn
            </MenuItem>
          </MenuPopover>
        </Stack>
        <IconButton align="right" size="large" color="inherit" onClick={handleOpen}>
          <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default ContactElement;
