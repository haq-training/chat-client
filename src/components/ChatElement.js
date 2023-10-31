import PropTypes from 'prop-types';
import { Avatar, Badge, Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { loader } from 'graphql.macro';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import StyledBadge from './StyledBadge';
import useAuth from '../hooks/useAuth';

const LIST_FRIENDS = loader('../graphql/queries/user/listFriends.graphql');

ChatElement.propTypes = {
  firstName: PropTypes.string,
  avatarUrl: PropTypes.string,
  lastName: PropTypes.string,
  time: PropTypes.string,
  online: PropTypes.bool,
  unread: PropTypes.number,
  email: PropTypes.string,
};
function ChatElement({ firstName, avatarUrl, lastName, time, online, unread, email }) {
  const theme = useTheme();

  const { user } = useAuth();

  const [friends, setFriends] = useState([]);

  const { data: listFriends } = useQuery(LIST_FRIENDS);

  useEffect(() => {
    if (listFriends && listFriends.listFriend) {
      setFriends(listFriends.listFriend);
    }
  }, [listFriends]);
  console.log('fasdasdr', friends.firstName);
  console.log('usasdaser', user);
  return (
    <Box
      key={friends}
      sx={{
        width: '100%',
        borderRadius: 1,
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
      }}
      p={2}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          {online ? (
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
              <Avatar src={avatarUrl} />
            </StyledBadge>
          ) : (
            <Avatar src={avatarUrl} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">
              {firstName} {lastName}
            </Typography>
            <Typography variant="caption">{email}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default ChatElement;
