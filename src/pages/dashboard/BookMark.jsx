import { Box, IconButton, Stack, Typography, Button, Divider } from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import {bookmarkList} from "../../_apis_/data";
import BookMarkElement from "../../components/BookMarksElement";


export default function BookMark() {
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
          <Stack p={3} spacing={2} sx={{ height: '100vh' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="h5">BookMark</Typography>
            </Stack>
              <Stack spacing={2} direction="column" sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}>
                  <Stack spacing={2.4}>
                      <Typography variant="subtitle2" sx={{ color: '#676767' }}>
                          Các mục đã ghim
                      </Typography>
                      {bookmarkList
                          .map((el) => (
                              <BookMarkElement key={el.id} {...el} />
                          ))}
                  </Stack>
              </Stack>
          </Stack>
        </Box>
   </>
  );
}
