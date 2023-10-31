import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
  cusWidth: PropTypes.number,
  cusHeight: PropTypes.number,
  wrapperWidth: PropTypes.number,
  wrapperHeight: PropTypes.number,
};

export default function Logo({
  disabledLink = false,
  sx,
  cusWidth = 60,
  cusHeight = 60,
  wrapperWidth = 40,
  wrapperHeight = 60,
}) {
  const logo = (
    <Box sx={{ width: wrapperWidth, height: wrapperHeight, ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" width={cusWidth} height={cusHeight} viewBox="0 0 80 36">
        <image
          id="Layer_1"
          data-name="Layer 1"
          width={cusWidth}
          height={cusHeight}
          xlinkHref='data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="48" height="48" viewBox="0 0 48 48"%3E%3Cg fill="none"%3E%3Cpath fill="%232F88FF" fill-rule="evenodd" d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516" clip-rule="evenodd"%2F%3E%3Cpath stroke="%23000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516"%2F%3E%3Cpath fill="%23fff" d="M15.125 20.4667C16.3676 20.4667 17.375 19.4519 17.375 18.2C17.375 16.9482 16.3676 15.9333 15.125 15.9333C13.8824 15.9333 12.875 16.9482 12.875 18.2C12.875 19.4519 13.8824 20.4667 15.125 20.4667Z"%2F%3E%3Cpath fill="%23fff" d="M24.125 20.4667C25.3676 20.4667 26.375 19.4519 26.375 18.2C26.375 16.9482 25.3676 15.9333 24.125 15.9333C22.8824 15.9333 21.875 16.9482 21.875 18.2C21.875 19.4519 22.8824 20.4667 24.125 20.4667Z"%2F%3E%3Cpath fill="%232F88FF" fill-rule="evenodd" d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728" clip-rule="evenodd"%2F%3E%3Cpath stroke="%23000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728"%2F%3E%3Cpath fill="%232F88FF" fill-rule="evenodd" d="M42.0024 35.9728L43 42L38.7618 39.9293" clip-rule="evenodd"%2F%3E%3Cpath stroke="%23000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42.0024 35.9728L43 42L38.7618 39.9293"%2F%3E%3Cpath fill="%23fff" d="M35.6875 30.7999C34.7555 30.7999 34 30.0388 34 29.0999C34 28.161 34.7555 27.3999 35.6875 27.3999C36.6195 27.3999 37.375 28.161 37.375 29.0999C37.375 30.0388 36.6195 30.7999 35.6875 30.7999Z"%2F%3E%3Cpath fill="%23fff" d="M28.9375 30.7999C28.0055 30.7999 27.25 30.0388 27.25 29.0999C27.25 28.161 28.0055 27.3999 28.9375 27.3999C29.8695 27.3999 30.625 28.161 30.625 29.0999C30.625 30.0388 29.8695 30.7999 28.9375 30.7999Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'
        />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
