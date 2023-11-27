import React from 'react';
import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import Chats from './Chat';
import Conversation from '../../components/Conversation';
import Contact from '../../sections/@dashboard/contacts/Contact';
import SharedMessages from '../../components/SharedMessages';
import StarredMessages from '../../components/StarredMessages';

export default function GeneralApp() {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <Chats />
      <Box
        sx={{
          height: '100%',
          width: sidebar.open ? 'calc(100vw - 740px)' : 'calc(100vw - 420px)',
          backgroundColor: theme.palette.mode === 'light' ? '#F0F4FA' : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
       {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case 'CONTACT':
              return <Contact />;

            case 'STARRED':
              return <StarredMessages />;

            case 'SHARED':
              return <SharedMessages />;

            default:
              return null;
          }
        })()}
    </Stack>
  );
}

