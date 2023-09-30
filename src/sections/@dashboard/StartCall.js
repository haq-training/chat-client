import { Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material';
import React from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { CallElement } from '../../components/CallElement';
import { membersList } from '../../_apis_/data';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const StartCall = ({ open, handleClose }) => (
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
      {/* Form */}
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

      {/* Call List */}
      {membersList.map((el) => (
        <CallElement {...el} />
      ))}
    </DialogContent>
  </Dialog>
);

export default StartCall;
