import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

// ----------------------------------------------------------------------

export default function MainLayout() {
  const [, setPageHeading] = useState(null);
  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      <Outlet context={{ setPageHeading }} />

      <Box sx={{ flexGrow: 1 }} />

      <MainFooter />
    </Stack>
  );
}
