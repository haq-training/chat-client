import PropTypes from 'prop-types';
import { faker } from '@faker-js/faker';
import React from 'react';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import { ArrowDownLeft, ArrowUpRight, Phone, VideoCamera } from 'phosphor-react';
import StyledBadge from '../../../components/StyledBadge';

CallLogElement.propTypes = {
  online: PropTypes.bool,
  incoming: PropTypes.bool,
  missed: PropTypes.bool,
};

CallElement.propTypes = {
  online: PropTypes.bool,
};
function CallLogElement({ online, incoming, missed }) {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          borderRadius: 1,
          backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default),
        }}
        p={2}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={2}>
            {online ? (
              <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{faker.name.fullName()}</Typography>

              <Stack direction="row" alignItems="center" spacing={1}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? 'red' : 'green'} />
                ) : (
                  <ArrowUpRight color={missed ? 'red' : 'green'} />
                )}
                <Typography variant="caption">Yesterday 21:34</Typography>
              </Stack>
            </Stack>
          </Stack>
          <IconButton>
            <Phone color="green" />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
}

function CallElement({ online }) {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 1,
        backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default),
      }}
      p={2}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={2}>
          {online ? (
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center">
          <IconButton>
            <Phone color="green" />
          </IconButton>
          <IconButton>
            <VideoCamera color="green" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
export { CallLogElement, CallElement };
