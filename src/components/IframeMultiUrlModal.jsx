import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Button, IconButton, Stack } from '@mui/material';
import Iframe from 'react-iframe';
import { GetApp } from '@mui/icons-material';
import { downloadFileWithURL } from '../utils/utilities';
import Iconify from './Iconify';

// ---------------------------------------------------------------------------------------
const ModalContainer = styled('div')({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.96)',
  zIndex: 9999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ButtonContainer = styled('div')({
  position: 'fixed',
  top: '24px',
  right: '10px',
});

const CloseButton = styled(Button)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '24px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  color: theme.palette.warning.main,
  fontSize: '16px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'underline',
}));

// ---------------------------------------------------------------------------------------

IframeMultiUrlModal.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default function IframeMultiUrlModal({ urls, isOpen, onClose, name }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const nextUrl = () => {
    const nextCount = count + 1;
    if (nextCount < urls.length) setCount(nextCount);
  };

  const previousUrl = () => {
    const previousCount = count - 1;
    if (previousCount >= 0) setCount(previousCount);
  };

  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ButtonContainer>
            <DownloadButton
              onClick={() => {
                downloadFileWithURL(urls[count], name);
              }}
            >
              <GetApp />
            </DownloadButton>
            <CloseButton
              onClick={() => {
                onClose();
                setCount(0);
              }}
            >
              X
            </CloseButton>
          </ButtonContainer>

          <Iframe url={urls[count]} width="95%" height="95%" frameBorder="0" allowFullScreen onClose={onClose} />

          <Stack direction={'row'} sx={{ justifyContent: 'space-between', position: 'absolute', width: '100%' }}>
            <Stack sx={{ alignSelf: 'center' }}>
              <IconButton onClick={previousUrl}>
                <Iconify icon={'ooui:previous-ltr'} width={24} height={24} />
              </IconButton>
            </Stack>

            <Stack sx={{ alignSelf: 'center', alignItems: 'right' }}>
              <IconButton onClick={nextUrl}>
                <Iconify icon={'ooui:next-ltr'} width={24} height={24} />
              </IconButton>
            </Stack>
          </Stack>
        </ModalContainer>
      )}
    </>
  );
}
