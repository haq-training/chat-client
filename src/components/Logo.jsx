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
          xlinkHref='data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="24" height="24" viewBox="0 0 24 24"%3E%3Cpath fill="currentColor" d="M3 12c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H9v3l-3-3H3zm18 6c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-6v1c0 2.2-1.8 4-4 4v2c0 1.1.9 2 2 2h2v3l3-3h3z"%2F%3E%3C%2Fsvg%3E'
        />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
