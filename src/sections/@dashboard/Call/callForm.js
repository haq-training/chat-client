import { Box, IconButton, Stack, Typography, Divider, Link } from '@mui/material';
import React, { useState } from 'react';
import { MagnifyingGlass, Phone } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import { Search, SearchIconWrapper, StyledInputBase } from '../../../components/Search';

import { CallLogs } from '../../../_apis_/data';
import { CallLogElement } from '../../../components/CallElement';
import StartCall from '../StartCall';

export default function CallForm() {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: 320,
          backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
          boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
        }}
      >
        <Stack p={3} spacing={2} sx={{ height: '100vh' }}>
          <Stack>
            <Typography variant="h5">Call Log</Typography>
          </Stack>
          <Stack sx={{ width: '100%' }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant="subtitle2" component={Link}>
              Start Conversation
            </Typography>
            <IconButton onClick={handleOpenDialog}>
              <Phone style={{ color: theme.palette.primary.main }} />
            </IconButton>
          </Stack>
          <Divider />
          <Stack spacing={2} direction="column" sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}>
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: '#676767' }}>
                All Contacts
              </Typography>
              {CallLogs.map((el) => (
                <CallLogElement key={el.id} {...el} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog} />}
    </>
  );
}
