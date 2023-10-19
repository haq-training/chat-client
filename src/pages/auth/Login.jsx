// noinspection JSValidateTypes,DuplicatedCode

import { styled } from '@mui/material/styles';
import { Box, Card, Container, Stack, Typography } from '@mui/material';

import useResponsive from '../../hooks/useResponsive';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
import { LoginForm } from '../../sections/auth/login';
import UnAuthorizationPage from '../../components/UnAuthorizationPage';
// import { PATH_AUTH } from '../../routes/paths';
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
  width: '100%',
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
  maxWidth: 600,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing('auto'),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '80vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
  const mdUp = useResponsive('up', 'md');

  return (
      <UnAuthorizationPage title="Đăng nhập">
        <RootStyle>
          <HeaderStyle>
            <Logo />
          </HeaderStyle>
          {mdUp && (
              <SectionStyle>
                <Image visibleByDefault disabledEffect alt="login" src="/static/illustrations/right-financial.svg" />
              </SectionStyle>
          )}

          <Container maxWidth="sm">
            <ContentStyle>
              <Stack direction="column" sx={{ mb: 5 }}>
                <Box sx={{ flexGrow: 1, justifyContent: 'right', mx: 'auto' }}>
                  <Typography variant="h4" gutterBottom>
                    Đăng nhập
                  </Typography>
                </Box>
              </Stack>
              <LoginForm />
            </ContentStyle>
          </Container>
        </RootStyle>
      </UnAuthorizationPage>
  );
}
