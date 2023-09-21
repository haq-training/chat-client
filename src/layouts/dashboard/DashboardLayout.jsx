import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import Main from './Main';

// const isAuthenticated = true;

const DashboardLayout = () => (
  // if (!isAuthenticated) {
  //   return <Navigate to="/auth/login" />;
  // }

  <Stack direction="row">
    <Main />
    <Outlet />
  </Stack>
);
export default DashboardLayout;
