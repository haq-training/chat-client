// noinspection DuplicatedCode,JSValidateTypes

import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Card, Container, Link, Typography } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import { PATH_AUTH } from '../../routes/paths';
// import Page from '../../components/Page';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
import { RegisterForm } from '../../sections/auth/register';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '70%',
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

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',

  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <RootStyle
        sx={{
          height: 1,
          backgroundImage: `url("https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2148999934.jpg?w=1480&t=st=1695577150~exp=1695577750~hmac=a06959aa6c2e192e0511d3d3475c3ff5afbf9338250262222ddbbfc1c89bdb42")`,
        }}
      >
        <HeaderStyle>
          <Logo sx={{ width: 36, height: 24 }} />
          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              Bạn đã có tài khoản?{' '}
              <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
                Đăng nhập ngay.
              </Link>
            </Typography>
          )}
        </HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Image
              visibleByDefault
              disabledEffect
              alt="register"
              src="/static/illustrations/illustration_register.png"
            />
          </SectionStyle>
        )}

        <Container>
          <ContentStyle>
            <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  ĐĂNG KÝ TÀI KHOẢN
                </Typography>
              </Box>
            </Box>

            <RegisterForm />

            {!smUp && (
              <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                Bạn đã có tài khoản?{' '}
                <Link variant="subtitle2" to={PATH_AUTH.login} component={RouterLink}>
                  Đăng nhập ngay.
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
