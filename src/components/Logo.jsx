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
          xlinkHref="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNexw97d0ss4_AiLjMYR3x2Jqhc9-vUt3BsjRDPrTAOJlBXtOG5pvzZoBVrloNNUYees&usqp=CAU"
        />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
