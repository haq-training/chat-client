import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import Page from '../../components/Page';
import UpDateEditUserInfo from '../../sections/@dashboard/user /list/UpDateEditUserInfo';
// ----------------------------------------------------------------------
const GET_USER_INFO = loader('../../graphql/queries/user/getUserInformation.graphql');
// ----------------------------------------------------------------------

export default function UpDateUserInfo() {
  const { pathname } = useLocation();

  const { id } = useParams();

  const [currentUser, setCurrentUser] = useState({});

  const isEdit = pathname.includes('chinh-sua');

  console.log('isEdit', isEdit);

  const { data: allGetUser } = useQuery(GET_USER_INFO, {
    variables: {
      id: Number(id),
    },
  });

  console.log('allGetUser', allGetUser);

  useEffect(() => {
    if (allGetUser) {
      setCurrentUser(allGetUser.user);
    }
  }, [allGetUser]);

  const currentGetIdUser = id ? currentUser : null;

  return (
    <>
      <Page title={!isEdit ? 'Người dùng: Sửa thông tin người dùng' : 'Người dùng: Sửa thông tin người dùng'}>
        <Container maxWidth={false}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {!isEdit ? ' Sửa thông tin người dùng' : ' Sửa thông tin người dùng'}
          </Typography>
          <UpDateEditUserInfo isEdit={isEdit} row={currentGetIdUser} />
        </Container>
      </Page>
    </>
  );
}
