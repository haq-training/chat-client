import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Box, Stack } from '@mui/material';
import SettingForm from '../../sections/@dashboard/settings/SettingForm';
import Conversation from '../../components/Conversation';

export default function Settings() {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <SettingForm />
      <Box
        sx={{
          height: '100%',
          width: sidebar.open ? 'calc(100vw - 740px)' : 'calc(100vw - 420px)',
          backgroundColor: theme.palette.mode === 'light' ? '#F0F4FA' : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
}
