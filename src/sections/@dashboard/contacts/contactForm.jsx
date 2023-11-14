import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MagnifyingGlass, UserPlus } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Search, SearchIconWrapper, StyledInputBase } from '../../../components/Search';
import AddFriends from './AddFriends';
import ContactElement from '../../../components/ContacElement';
import BlockElement from './blockElement';

// ----------------------------------------------------------------------

const LIST_FRIENDS = loader('../../../graphql/queries/user/listFriends.graphql');

// ----------------------------------------------------------------------

export default function ContactForm() {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const [friends, setFriends] = useState([]);

  const { data: listFriends } = useQuery(LIST_FRIENDS);

  useEffect(() => {
    if (listFriends && listFriends.listFriend) {
      setFriends(listFriends.listFriend);
    }
  }, [listFriends]);
  console.log('fr', friends);
  console.log('cvb', listFriends);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Box
        key={friends}
        sx={{
          position: 'relative',
          width: 320,
          backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
          boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
        }}
      >
        <Stack key={friends} p={3} spacing={2} sx={{ height: '100vh' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
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
            <Typography variant="h6">Thêm liên lạc mới!</Typography>
            <IconButton
              onClick={() => {
                setOpenDialog(true);
              }}
            >
              <UserPlus style={{ color: theme.palette.primary.main }} />
            </IconButton>
          </Stack>

          <Divider />

          <Stack key={friends} spacing={2} direction="column" sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}>
            <Stack spacing={2.4}>
              <Typography variant="h6" sx={{ color: '#676767' }}>
                Danh bạ
              </Typography>
              {friends.friend?.map((el, row) => (
                <ContactElement key={el.id} {...el} row={row} />
              ))}
            </Stack>
            <Stack spacing={2.4}>
              <Typography variant="h6" sx={{ color: '#676767' }}>
                Đã chặn
              </Typography>
              {friends.block?.map((el, row) => (
                <BlockElement key={el.id} {...el} row={row} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {openDialog && <AddFriends open={openDialog} handleClose={handleCloseDialog} />}
    </>
  );
}
