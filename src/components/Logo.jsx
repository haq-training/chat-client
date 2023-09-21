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
          xlinkHref="data:image/png;base64,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"
        />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
