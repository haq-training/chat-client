// noinspection JSValidateTypes

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
import { Box } from '@mui/material';
// import { useOutletContext } from 'react-router';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => 
  // const { setPageHeading } = useOutletContext();
  // useEffect(() => {
  //   setPageHeading(title);
  // }, [setPageHeading, title]);
   (
    <>
      <Helmet>
        <title>{`${title} | Chat`}</title>
        {meta}
      </Helmet>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  )
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  heading: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
