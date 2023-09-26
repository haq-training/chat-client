import { Outlet } from 'react-router-dom';
import { Box, Stack, Container } from '@mui/material';
import { useState } from 'react';
// import Logo from '../../components/Logo';

// ----------------------------------------------------------------------

export default function MainLayout() {
  const [, setPageHeading] = useState(null);
  return (
    <Container sx={{ mt: 5 }} maxWidth="lg">
      <Stack spacing={5}>
        <Stack sx={{ width: '100%' }} direction="column" alignItems={'center'}>
          <Stack style={{ height: 120, width: 120 }} />
        </Stack>
      </Stack>
      <Stack sx={{ minHeight: 1 }}>
        <Outlet context={{ setPageHeading }} />
        <Box sx={{ flexGrow: 1 }} />
      </Stack>
    </Container>
  );
}
