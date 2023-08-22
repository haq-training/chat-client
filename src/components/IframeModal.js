import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Iframe from 'react-iframe';
import { GetApp } from '@mui/icons-material';
import { downloadFileWithURL } from '../utils/utilities';

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

IframeModal.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default function IframeModal({ url, isOpen, onClose, name }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ButtonContainer>
            <DownloadButton
              onClick={() => {
                downloadFileWithURL(url, name);
              }}
            >
              <GetApp />
            </DownloadButton>
            <CloseButton onClick={onClose}>X</CloseButton>
          </ButtonContainer>
          <Iframe url={url} width="100%" height="100%" frameBorder="0" allowFullScreen onClose={onClose} />
        </ModalContainer>
      )}
    </>
  );
}
