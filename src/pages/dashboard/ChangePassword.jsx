// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
// layouts
// import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// routes
import { blueGrey } from '@mui/material/colors';
// components
import Page from '../../components/Page';
import ChangeFormPassword from '../../sections/auth/changeFormPassword';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: blueGrey,
  display: 'flex',
  minHeight: '60vh',
  flexDirection: 'column',
  padding: theme.spacing(19, 0),
}));
// ----------------------------------------------------------------------

export default function ChangePassword() {
  return (
    <Page title="Reset Password">
      <Container sx={{ml:50,mt:10}}>
        <ContentStyle>
          <Box sx={{ flexGrow: 1, justifyContent: 'center', mx: 'auto' }}>
            <Typography variant="h4" gutterBottom>
              ĐỔI MẬT KHẨU
            </Typography>
          </Box>
          <ChangeFormPassword />
        </ContentStyle>
      </Container>
    </Page>
  );
}
