import {useTheme} from '@mui/material/styles';
import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import useAuth from "../../hooks/useAuth";
import MyAvatar from "../../components/MyAvatar";


export default function UserAccount() {
    const { user } = useAuth();
    console.log('user',user);
    const theme = useTheme();
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
          <Stack p={3} spacing={2} sx={{ height: '25vh',backgroundImage: `url("https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30623.jpg?w=1480&t=st=1696777458~exp=1696778058~hmac=224c7b1b6f88a68a58d63cbd19faee41f7aa5267303629f81b1dd6edd810e537")` }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" >
                  <Typography variant="h5">My Profile</Typography>

              </Stack >
              <Box direction="row" alignItems="center" justifyContent="space-between" >
                  <MyAvatar/>
                  <Typography noWrap variant="subtitle1">
                      {user?.story}
                  </Typography>
              </Box >
              <Stack direction="row" alignItems="center" spacing={2} sx={{ py: 2, pr: 1, pl: 2.5 }}>
                  <div>
                      <Typography noWrap variant="subtitle1">
                          {user?.firstName} {user?.lastName}
                      </Typography>
                      <Typography noWrap variant="body2" sx={{ color: 'text.secondary' }}>
                          {user?.email}
                      </Typography>
                      <Typography noWrap variant="body2" sx={{ color: 'text.secondary' }}>
                          {user?.location}
                      </Typography>
                  </div>
              </Stack>
          </Stack>
      </Box>
  </>
);
}
