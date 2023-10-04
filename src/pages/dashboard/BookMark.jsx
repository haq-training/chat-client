import { Box, IconButton, Stack, Typography, Button, Divider } from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import ContactForm from '../../sections/@dashboard/contacts/contactForm';
import Conversation from '../../components/Conversation';
import {useSelector} from "../../redux/store";

export default function BookMark() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        width: 320,
        backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: '100vh' }}>
          <ContactForm />
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">BookMark</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack spacing={2} direction="column" sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }} />
      </Stack>
    </Box>
  );
}
