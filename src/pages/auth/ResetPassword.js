// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
// routes
import { blueGrey, red } from '@mui/material/colors';
// components
import Page from '../../components/Page';
import ResetPasswordForm from '../../sections/auth/reset-password/ResetPasswordForm';
import Logo from '../../components/Logo';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));
const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 450,
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
  return (
    <Page title="Reset Password">
      <RootStyle>
        <HeaderStyle>
          <Logo />
        </HeaderStyle>

        <Container>
          <ContentStyle>
            <Box>
              <Typography variant="h3" paragraph alignItems="center" justifyContent="center" display="flex">
                Bạn đã quên mật khẩu??
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 3.5, mx: 1 }}>
                Vui lòng nhập địa chỉ email được liên kết với tài khoản của bạn và chúng tôi sẽ reset lại mật khẩu cho
                bạn!
              </Typography>
            </Box>
            <ResetPasswordForm />
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
