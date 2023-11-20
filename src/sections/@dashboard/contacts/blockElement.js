import PropTypes from 'prop-types';
import { Avatar, Box, IconButton, MenuItem, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { loader } from 'graphql.macro';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useSnackbar } from 'notistack';
import StyledBadge from '../../../components/StyledBadge';
import MenuPopover from '../../../components/MenuPopover';
import Iconify from '../../../components/Iconify';
import CommonBackdrop from '../../../components/CommonBackdrop';

//----------------------------------------------------------------------------------
const LIST_FRIENDS = loader('../../../graphql/queries/user/listFriends.graphql');
const UN_BLOCK_USER = loader('../../../graphql/mutations/user/unBlockUser.graphql');
//----------------------------------------------------------------------------------

BlockElement.propTypes = {
  firstName: PropTypes.string,
  avatarUrl: PropTypes.string,
  lastName: PropTypes.string,
  online: PropTypes.bool,
};
function BlockElement({ firstName, avatarUrl, lastName, online }) {
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

  const block = friends.block?.[0].id;

  const [unBlockUser, { loading: loadingDeleteUser }] = useMutation(UN_BLOCK_USER, {
    onCompleted: () => {
      enqueueSnackbar('Đã Bỏ chặn đối phương!', {
        variant: 'success',
      });
    },

    onError: (error) => {
      enqueueSnackbar(`Không thể bỏ chặn đối tượng này. Nguyên nhân: ${error.message}`, {
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

  const handleUnBlockUser = async (id) => {
    await unBlockUser({
      variables: {
        id: Number(id),
      },
    });
  };
  return (
    <>
      <Box
        key={friends}
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
              <MenuItem onClick={handleClose} sx={{ color: 'info.main' }}>
                <Iconify icon={'basil:chat-solid'} sx={{ ...ICON }} />
                Nhắn tin
              </MenuItem>

              <MenuItem key={block} onClick={() => handleUnBlockUser(block)}>
                <Iconify icon={'ant-design:unlock-twotone'} sx={{ ...ICON }} />
                Bỏ Chặn
              </MenuItem>
            </MenuPopover>
          </Stack>
          <IconButton align="left" size="large" color="inherit" onClick={handleOpen}>
            <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
          </IconButton>
        </Stack>
        <CommonBackdrop loading={loadingDeleteUser} />
      </Box>
    </>
  );
}

export default BlockElement;
