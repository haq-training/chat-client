import { Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import { Search, SearchIconWrapper, StyledInputBase } from '../../../components/Search';
import { CallElement } from './CallElement';
import { membersList } from '../../../_apis_/data';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

StartCall.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.bool,
};

function StartCall({ open, handleClose }) {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
      onClose={handleClose}
    >
      <DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          <Stack sx={{ width: '100%' }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </Stack>
        </Stack>

        {membersList.map((el) => (
          <CallElement {...el} />
        ))}
      </DialogContent>
    </Dialog>
  );
}
export default StartCall;
