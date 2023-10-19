import {  Stack } from '@mui/material';
import React from 'react';

import CallForm from '../../sections/@dashboard/Call/callForm';



export default function GeneralApp() {
  return (
      <Stack direction="row" sx={{ width: '100%' }}>
        <CallForm />

      </Stack>
  );
}
