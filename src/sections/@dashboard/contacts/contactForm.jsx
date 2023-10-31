import { Box, Stack, Typography, Link, IconButton, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { Search, SearchIconWrapper, StyledInputBase } from '../../../components/Search';
import { chatList } from '../../../_apis_/data';
import ChatElement from '../../../components/ChatElement';
import AddFriends from './AddFriends';
import useAuth from '../../../hooks/useAuth';

// ----------------------------------------------------------------------

const LIST_FRIENDS = loader('../../../graphql/queries/user/listFriends.graphql');

// ----------------------------------------------------------------------

export default function ContactForm() {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const { user } = useAuth();
  const [friends, setFriends] = useState([]);
  const { data: listFriends } = useQuery(LIST_FRIENDS);

  useEffect(() => {
    if (listFriends && listFriends.listFriend) {
      setFriends(listFriends.listFriend);
    }
  }, [listFriends]);
  console.log('fr', friends);
  console.log('user', user);
  const handleCloseDialog = () => {
    setOpenDialog(false);
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
            <Typography variant="h5">Contacts</Typography>
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
              Thêm liên lạc mới!
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
          <Stack spacing={2} direction="column" sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}>
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: '#676767' }}>
                Pinned
              </Typography>
              {chatList
                .filter((el) => el.pinned)
                .map((el, row) => (
                  <ChatElement key={el.id} {...el} row={row} />
                ))}
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {openDialog && <AddFriends open={openDialog} handleClose={handleCloseDialog} />}
    </>
  );
}
