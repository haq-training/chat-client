import PropTypes from 'prop-types';
import { useState } from 'react';
import { Avatar, Card, IconButton, MenuItem, Typography } from '@mui/material';
import Iconify from '../../Iconify';
import { MenuPopoverVer2 } from '../../menu-popover-ver2';
// ----------------------------------------------------------------------

StandardNode.propTypes = {
  sx: PropTypes.object,
  node: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default function StandardNode({ node, onEdit, onDelete, sx }) {
  const [openPopover, setOpenPopover] = useState(null);

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  return (
    <>
      <Card
        sx={{
          p: 2,
          minWidth: 200,
          borderRadius: 1.5,
          textAlign: 'left',
          position: 'relative',
          display: 'inline-flex',
          flexDirection: 'column',
          textTransform: 'capitalize',
          ...sx,
        }}
      >
        <IconButton
          color={openPopover ? 'inherit' : 'default'}
          onClick={handleOpenPopover}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <Iconify icon="eva:more-horizontal-fill" />
        </IconButton>

        <Avatar alt={node.name} src={node.avatar || ''} sx={{ mr: 2, mb: 1, width: 48, height: 48 }} />

        <Typography variant="subtitle2" noWrap>
          {node.name}
        </Typography>

        <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
          {node.role}
        </Typography>
      </Card>

      <MenuPopoverVer2
        open={openPopover}
        onClose={handleClosePopover}
        anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
        transformOrigin={{ vertical: 'center', horizontal: 'left' }}
        arrow="left-center"
        sx={{ width: 160 }}
      >
        {onDelete && (
          <MenuItem
            onClick={() => {
              handleClosePopover();
              onDelete();
            }}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon="eva:trash-2-outline" />
            Delete
          </MenuItem>
        )}

        {onEdit && (
          <MenuItem
            onClick={() => {
              handleClosePopover();
              onEdit();
            }}
            lineColor={'red'}
          >
            <Iconify icon="eva:edit-fill" />
            Edit
          </MenuItem>
        )}
      </MenuPopoverVer2>
    </>
  );
}
