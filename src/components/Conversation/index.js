import { Box, Stack } from '@mui/material';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

const Conversation = () => (
  <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>
    <Header />
    <Box className="scrollbar" width={'100%'} sx={{ flexGrow: 1, height: '100%', overflowY: 'scroll' }}>
      <Message menu />
    </Box>
    <Footer />
  </Stack>
);

export default Conversation;
