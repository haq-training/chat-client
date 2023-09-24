// import { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// @mui
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { Box, Container, Link, Typography } from '@mui/material';
// layouts
// import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// routes
import { Link as RouterLink } from 'react-router-dom';
import { blueGrey, red } from '@mui/material/colors';
// import background from '../../../../../../../public/static/illustrations/b2.jpg';
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
// import Logo from '../../components/Logo';
// sections
// import { ResetPasswordForm } from '../../sections/auth/reset-password';
// assets
// import { SentIcon } from '../../assets';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));
const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  backgroundColor: blueGrey,
  display: 'flex',
  minHeight: '60vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));
const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  backgroundColor: red,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));
// ----------------------------------------------------------------------

export default function ResetPassword() {
  // const [email, setEmail] = useState('');
  // const [sent, setSent] = useState(false);

  return (
    <Page
      title="Reset Password"
      sx={{
        height: 1,
        backgroundImage: `url("https://img.freepik.com/free-vector/flat-geometric-background_23-2148957201.jpg?w=1480&t=st=1695577077~exp=1695577677~hmac=716bbf8204175c2a4167b3c4c24fb6a0e2c550035f325179fc2047f78ebf4bcf")`,
      }}
    >
      <RootStyle>
        <HeaderStyle>
          <Typography sx={{ mt: { md: -2 } }}>
            <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
              Quay trở lại trang đăng nhập!
            </Link>
          </Typography>
        </HeaderStyle>

        <Container>
          <ContentStyle>
            <Box sx={{ flexGrow: 1, justifyContent: 'right', mx: 'auto' }}>
              <Typography variant="h4" gutterBottom>
                Gửi yêu cầu để reset lại mật khẩu!
              </Typography>
            </Box>
            <LoadingButton fullWidth size="large" type="submit" variant="contained">
              Nhấn để gửi yêu cầu!
            </LoadingButton>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
