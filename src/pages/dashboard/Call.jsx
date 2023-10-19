import { Box, Stack, Typography, Link, IconButton, Divider } from '@mui/material';
import React, { useState } from 'react';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { SimpleBarStyle } from '../../components/Scrollbar';
import { CallLogs } from '../../_apis_/data';
import StartCall from '../../sections/@dashboard/StartCall';

export default function GeneralApp() {
  const theme = useTheme();

  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Stack direction={'row'} sx={{ width: '100%' }}>
        {/* Left */}
        <Box
          sx={{
            height: '100vh',
            backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background),
            width: 320,
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: '100vh' }}>
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
              <IconButton
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack spacing={3} className="scrollbar" sx={{ flexGrow: 1, overflowY: 'scroll', height: '100%' }}>
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2.5}>Call Logs</Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>

        {/* Right */}
      </Stack>
      {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog} />}
    </>
  );
}
