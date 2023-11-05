import PropTypes from 'prop-types';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { loader } from 'graphql.macro';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import StyledBadge from './StyledBadge';
import useAuth from '../hooks/useAuth';

const LIST_FRIENDS = loader('../graphql/queries/user/listFriends.graphql');

ContactElement.propTypes = {
  firstName: PropTypes.string,
  avatarUrl: PropTypes.string,
  lastName: PropTypes.string,
  online: PropTypes.bool,
};
function ContactElement({ firstName, avatarUrl, lastName, online }) {
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
      <Stack direction="row" spacing={2} alignItems="center">
        {online ? (
          <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
            <Avatar alt={firstName} src={avatarUrl} />
          </StyledBadge>
        ) : (
          <Avatar alt={firstName} src={avatarUrl} />
        )}

        <Typography variant="subtitle2" sx={{ ml: 2, fontSize: 16 }}>
          {firstName} {lastName}
        </Typography>
      </Stack>
    </Box>
  );
}

export default ContactElement;
