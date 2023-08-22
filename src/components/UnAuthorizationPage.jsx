// noinspection JSValidateTypes

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const UnAuthorizationPage = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | Công ty CP Thép Công Nghiệp HN`}</title>
      {meta}
    </Helmet>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

UnAuthorizationPage.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  heading: PropTypes.string,
  meta: PropTypes.node,
};

export default UnAuthorizationPage;
