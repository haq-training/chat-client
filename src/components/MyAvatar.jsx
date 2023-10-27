import useAuth from '../hooks/useAuth';
import createAvatar from '../utils/createAvatar';
import Avatar from './Avatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user } = useAuth();
  return (
    <Avatar
      src={user?.avatarUrl}
      alt={user?.lastName}
      color={user?.avatarUrl ? 'default' : createAvatar(user?.lastName).color}
      {...other}
    >
      {createAvatar(user?.lastName).name}
    </Avatar>
  );
}
