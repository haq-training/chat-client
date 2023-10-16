import { Avatar, Box, Stack, Typography, Icon, IconButton, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { File } from 'phosphor-react';
import React, { useState } from 'react';
import Iconify from './Iconify';
import MenuPopover from './MenuPopover';

const BookMarkElement = ({ id, name, img, msg }) => {
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
    <Box
      sx={{
        width: '100%',
        borderRadius: 1,
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
      }}
      p={2}
    >
      <Stack direction="row">
        <Stack direction="row" spacing={2}>
          {
            <Box
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              align="left"
            >
              <File src={img} size={32} />
            </Box>
          }

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
          <IconButton align="right" size="large" color="inherit" onClick={handleOpen}>
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
            <MenuItem onClick={handleClose}>
              <Iconify icon={'fluent-emoji-high-contrast:open-file-folder'} sx={{ ...ICON }} />
              Mở
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              <Iconify icon={'eva:edit-fill'} sx={{ ...ICON }} />
              Chỉnh sửa
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
              <Iconify icon={'eva:trash-2-outline'} sx={{ ...ICON }} />
              Xoá
            </MenuItem>
          </MenuPopover>
        </Stack>
      </Stack>
    </Box>
  );
};

export default BookMarkElement;
