import { Box, IconButton, Stack, Typography, Button, Divider, MenuItem, Icon } from '@mui/material';
import React, { useState } from 'react';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import Iconify from '../../components/Iconify';
import MenuPopover from '../../components/MenuPopover';
import { bookmarkList } from '../../_apis_/data';
import BookMarkElement from '../../components/BookMarksElement';

export default function BookMark() {
  const [open, setOpen] = useState(null);
  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
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
              {bookmarkList.map((el) => (
                <BookMarkElement key={el.id} {...el} />
              ))}
              <>
                <IconButton
                  size="large"
                  color="inherit"
                  sx={{ position: 'absolute', top: '5px', right: '5px', opacity: 0.99 }}
                  onClick={handleOpen}
                >
                  <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
                </IconButton>
                <MenuPopover
                  open={Boolean(open)}
                  anchorEl={open}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  arrow="right-top"
                  sx={{
                    mt: -0.5,
                    width: 'auto',
                    '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    <Iconify icon={'eva:edit-fill'} sx={{ ...ICON }} />
                    Chỉnh sửa
                  </MenuItem>
                </MenuPopover>
              </>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
