import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import { Typography, Card, Box, Stack, Avatar, MenuItem, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import Label from '../../Label';
import Iconify from '../../Iconify';
import MenuPopover from '../../MenuPopover';
import useToggle from '../../../hooks/useToggle';
import UpdateOfGroupNode from './UpdateOfGroupNode';
import { Role } from '../../../constant';
import useAuth from '../../../hooks/useAuth';

//-----------------------------------------------------------------------------
const GET_ALL_USER = loader('../../../graphql/queries/user/getAllUsers.graphql');
// ----------------------------------------------------------------------

GroupNode.propTypes = {
  sx: PropTypes.object,
  node: PropTypes.object,
  depth: PropTypes.number,
  length: PropTypes.number,
};

export default function GroupNode({ node, depth, length, sx }) {
  const { user } = useAuth();

  const [open, setOpen] = useState(null);
  const [userRole, setUserRole] = useState('');
  const { toggle: openUpdateUser, onOpen: onOpenUpdateUser, onClose: onCloseUpdateUser } = useToggle();

  const theme = useTheme();
  const [userUpdate, setUserUpdate] = useState();
  const isLight = theme.palette.mode === 'light';
  const [expandedAccountant, setExpandedAccountant] = useState(false);
  const [expandedAdmin, setExpandedAdmin] = useState(false);

  const [accountant, setAccountant] = useState([]);
  const [admin, setAdmin] = useState([]);

  const { data: allUsers } = useQuery(GET_ALL_USER, {
    variables: {
      input: {
        args: {
          first: 200,
        },
      },
    },
  });
  const handleExpandAccountant = () => {
    setExpandedAccountant(!expandedAccountant);
    setExpandedAdmin(false);
  };
  const handleExpandAdmin = () => {
    setExpandedAccountant(false);

    setExpandedAdmin(!expandedAdmin);
  };
  useEffect(() => {
    if (allUsers) {
      const adminData = allUsers?.users?.edges.filter((user) => user.node?.role === Role.admin);
      if (adminData && adminData.length > 0) {
        const adminDataList = adminData.map(({ node }) => {
          const { id, fullName, role, avatarURL, phoneNumber, firstName, lastName, address, isActive } = node;
          return { id, fullName, role, avatarURL, phoneNumber, firstName, lastName, address, isActive };
        });
        setAdmin(adminDataList);
      }
      const accountantData = allUsers?.users?.edges.filter((user) => user.node?.role === Role.accountant);
      if (accountantData && accountantData.length > 0) {
        const updatedAccountantList = accountantData.map(({ node }) => {
          const { id, fullName, role, avatarURL, phoneNumber, firstName, lastName, address, isActive } = node;
          return { id, fullName, role, avatarURL, phoneNumber, firstName, lastName, address, isActive };
        });
        setAccountant(updatedAccountantList);
      }
    }
  }, [allUsers]);

  const styles = (color) => ({
    bgcolor: alpha(theme.palette[color].main, 0.08),
    border: `solid 1px ${alpha(theme.palette[color].main, 0.24)}`,
    color: isLight ? theme.palette[color].darker : theme.palette[color].lighter,
  });

  const isLabel = depth === 1 || depth === -1;

  const isGrRoot = node.group === 'root';

  const isGrManager = node.group === 'Admin';

  const isGrAccountant = node.group === 'Accountant';

  const isGrTransport = node.group === 'Driver' || 'TransporterManager';

  const isGrMarketing = node.group === 'Sales';

  useEffect(() => {
    if (node.role) {
      if (node.role === Role.director) {
        setUserRole('Giám Đốc');
      } else if (node.role === Role.admin) {
        setUserRole('Quản Lý');
      } else if (node.role === Role.driver) {
        setUserRole('Lái Xe');
      } else if (node.role === Role.sales) {
        setUserRole('Kinh Doanh');
      } else if (node.role === Role.transporterManager) {
        setUserRole('Quản Lý Vận Chuyển');
      } else if (node.role === Role.accountant) {
        setUserRole('Kế Toán');
      }
    }
  }, [node]);
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };
  const handleGetUpdate = (id) => {
    if (id && expandedAdmin) {
      const currentUser = admin.find((e) => e.id === Number(id));
      setUserUpdate(currentUser);
    }
    if (id && expandedAccountant) {
      const currentUser = accountant.find((e) => e.id === Number(id));
      setUserUpdate(currentUser);
    }
  };
  // let marginRightValue = null;
  // let marginLeftValue = null;
  // if (expandedAccountant) {
  //   marginRightValue = '32%';
  // } else if (expandedAdmin) {
  //   marginRightValue = '23.5%';
  // }
  //
  // if (expandedAdmin) {
  //   marginLeftValue = '42%';
  // } else if (expandedAccountant) {
  //   marginLeftValue = '44.5%';
  // }
  return (
    <Stack sx={{ position: 'relative', display: 'inline-flex' }} alignItems="center">
      {depth !== -1 ? (
        <>
          {!isLabel && (
            <Avatar
              alt={node.name}
              src={node.avatar || ''}
              sx={{
                mt: -3.5,
                zIndex: 99,
                width: 56,
                height: 56,
                position: 'absolute',
                border: `solid 4px ${theme.palette.background.paper}`,
                backgroundColor: '#B5E3FFE5',
              }}
            />
          )}
          <Card
            sx={{
              pt: 4,
              pb: 2,
              minWidth: 180,
              borderRadius: 1.5,
              textTransform: 'capitalize',
              ...(isLabel && { py: 2 }),
              ...(isLabel && isGrManager && styles('primary')),
              ...(isLabel && isGrAccountant && styles('primary')),
              ...(isLabel && isGrTransport && styles('info')),
              ...(isLabel && isGrMarketing && styles('warning')),
              ...sx,
            }}
          >
            {depth !== 1 && depth !== -1 && !isGrRoot && (
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  width: 1,
                  height: 4,
                  position: 'absolute',
                  borderRadius: 1.5,
                  ...(isGrManager && {
                    bgcolor: 'primary.light',
                  }),
                  ...(isGrAccountant && {
                    bgcolor: 'primary.light',
                  }),
                  ...(isGrTransport && {
                    bgcolor: 'info.light',
                  }),
                  ...(isGrMarketing && {
                    bgcolor: 'warning.light',
                  }),
                }}
              />
            )}

            <Typography variant={isLabel ? 'subtitle1' : 'subtitle2'} noWrap>
              {node.name}
              {isLabel &&
                (node.name === 'Phòng XNK - Kho' || node.name === 'Phòng Marketing' ? (
                  <Label color={(isGrTransport && 'info') || (isGrMarketing && 'warning') || 'primary'} sx={{ ml: 1 }}>
                    {node.name === 'Phòng XNK - Kho' ? 14 : 2}
                  </Label>
                ) : (
                  <Label color={(isGrTransport && 'info') || (isGrMarketing && 'warning') || 'primary'} sx={{ ml: 1 }}>
                    {depth === -1 ? 1 : length}
                  </Label>
                ))}
            </Typography>

            {!isLabel && (
              <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
                {userRole}
              </Typography>
            )}
            <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
              {node.phoneNumber}
            </Typography>
            {node.role && ((user.role === Role.admin && node.group !== 'root') || user.role === Role.director) && (
              <>
                <IconButton
                  size="large"
                  color="inherit"
                  sx={{ position: 'absolute', top: '5px', right: '5px', opacity: 0.99 }}
                  onClick={handleOpen}
                >
                  <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
                </IconButton>
                <MenuPopover
                  open={Boolean(open)}
                  anchorEl={open}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  arrow="right-top"
                  sx={{
                    mt: -0.5,
                    width: 'auto',
                    '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      onOpenUpdateUser();
                    }}
                  >
                    <Iconify icon={'eva:edit-fill'} sx={{ ...ICON }} />
                    Chỉnh sửa
                  </MenuItem>
                </MenuPopover>
              </>
            )}
          </Card>
        </>
      ) : (
        <>
          <Stack style={{ flexDirection: 'row', position: 'relative' }}>
            {expandedAdmin && admin.length > 0 ? (
              <Stack style={{ flexDirection: 'row', marginTop: 6, position: 'absolute', right: 365 }}>
                {admin.map((tag, index) => (
                  <Stack key={index} alignItems="center" style={{ position: 'relative', marginRight: 5 }}>
                    <Avatar
                      alt={tag.fullName}
                      src={tag.avatarURL || ''}
                      sx={{
                        mt: -3.5,
                        zIndex: 99,
                        width: 56,
                        height: 56,
                        position: 'absolute',
                        border: `solid 4px ${theme.palette.background.paper}`,
                        backgroundColor: '#B5E3FFE5',
                      }}
                    />

                    <Card
                      sx={{
                        pt: 4,
                        pb: 2,
                        minWidth: 160,
                        borderRadius: 1.5,
                        textTransform: 'capitalize',
                      }}
                    >
                      <Box
                        sx={{
                          top: 0,
                          left: 0,
                          width: 1,
                          height: 4,
                          position: 'absolute',
                          borderRadius: 1.5,
                          bgcolor: 'primary.light',
                        }}
                      />

                      <Stack alignItems="center">
                        <Typography variant={'subtitle2'} noWrap>
                          {tag.fullName}
                        </Typography>
                        <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
                          {tag.role}
                        </Typography>
                        <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
                          {tag.phoneNumber}
                        </Typography>
                      </Stack>
                    </Card>
                    {user.role === Role.admin || user.role === Role.director ? (
                      <>
                        <IconButton
                          size="large"
                          color="inherit"
                          sx={{ position: 'absolute', right: '1px', opacity: 0.99 }}
                          onClick={(event) => {
                            handleOpen(event);
                            handleGetUpdate(tag.id);
                          }}
                        >
                          <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
                        </IconButton>
                        <MenuPopover
                          open={Boolean(open)}
                          anchorEl={open}
                          onClose={handleClose}
                          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                          arrow="right-top"
                          sx={{
                            mt: -0.5,
                            width: 'auto',
                            '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
                          }}
                        >
                          <MenuItem
                            onClick={() => {
                              handleClose();
                              onOpenUpdateUser();
                            }}
                          >
                            <Iconify icon={'eva:edit-fill'} sx={{ ...ICON }} />
                            Chỉnh sửa
                          </MenuItem>
                        </MenuPopover>
                      </>
                    ) : null}
                  </Stack>
                ))}
              </Stack>
            ) : null}
            <Stack
              style={{
                borderRadius: '15px',
                border: `solid 2px ${theme.palette.divider}`,
              }}
            >
              <Stack style={{ flexDirection: 'row' }}>
                <Stack style={{ margin: 20, position: 'relative' }}>
                  <Card
                    sx={{
                      pt: 3,
                      pb: 2,
                      minWidth: 140,
                      borderRadius: 1.5,
                      textTransform: 'capitalize',
                      ...(isLabel && { py: 2 }),
                      ...(isLabel && isGrManager && styles('primary')),
                      ...(isLabel && isGrTransport && styles('info')),
                      ...(isLabel && isGrAccountant && styles('primary')),
                      ...(isLabel && isGrMarketing && styles('warning')),
                      ...sx,
                    }}
                  >
                    <Typography variant={'subtitle1'} noWrap>
                      {node.name}

                      <Label
                        color={(isGrTransport && 'info') || (isGrMarketing && 'warning') || 'primary'}
                        sx={{ ml: 1 }}
                      >
                        {admin.length}
                      </Label>
                    </Typography>
                  </Card>
                  <IconButton
                    size="large"
                    color="inherit"
                    sx={{
                      position: 'absolute',
                      bottom: 25,
                      left: 105,
                      opacity: 0.99,
                    }}
                    onClick={handleExpandAdmin}
                  >
                    <Iconify icon={'entypo:magnifying-glass'} width={16} height={16} />
                  </IconButton>
                </Stack>
                <Stack style={{ margin: 20, position: 'relative' }}>
                  <Card
                    sx={{
                      pt: 4,
                      pb: 2,
                      minWidth: 140,
                      borderRadius: 1.5,
                      textTransform: 'capitalize',
                      ...(isLabel && { py: 2 }),
                      ...(isLabel && isGrManager && styles('primary')),
                      ...(isLabel && isGrAccountant && styles('primary')),
                      ...(isLabel && isGrTransport && styles('info')),
                      ...(isLabel && isGrMarketing && styles('warning')),
                      ...sx,
                    }}
                  >
                    <Typography variant={'subtitle1'} noWrap>
                      Phòng HCNS
                      <Label
                        color={(isGrTransport && 'info') || (isGrMarketing && 'warning') || 'primary'}
                        sx={{ ml: 1 }}
                      >
                        {accountant.length}
                      </Label>
                    </Typography>
                  </Card>
                  <IconButton
                    size="large"
                    color="inherit"
                    sx={{
                      bottom: 25,
                      left: 105,
                      position: 'absolute',
                      opacity: 0.99,
                    }}
                    onClick={handleExpandAccountant}
                  >
                    <Iconify icon={'entypo:magnifying-glass'} width={16} height={16} />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
            {expandedAccountant && accountant.length > 0 ? (
              <Stack style={{ flexDirection: 'row', marginTop: 6, position: 'absolute', left: 370 }}>
                {accountant.map((node, index) => (
                  <Stack key={index} alignItems="center" style={{ position: 'relative', marginRight: 5 }}>
                    <Avatar
                      alt={node.fullName}
                      src={node.avatarURL || ''}
                      sx={{
                        mt: -3.5,
                        zIndex: 99,
                        width: 56,
                        height: 56,
                        position: 'absolute',
                        border: `solid 4px ${theme.palette.background.paper}`,
                        backgroundColor: '#B5E3FFE5',
                      }}
                    />

                    <Card
                      sx={{
                        pt: 4,
                        pb: 2,
                        minWidth: 160,
                        borderRadius: 1.5,
                        textTransform: 'capitalize',
                      }}
                    >
                      <Box
                        sx={{
                          top: 0,
                          left: 0,
                          width: 1,
                          height: 4,
                          position: 'absolute',
                          borderRadius: 1.5,
                          bgcolor: 'primary.light',
                        }}
                      />

                      <Stack alignItems="center">
                        <Typography variant={'subtitle2'} noWrap>
                          {node.fullName}
                        </Typography>
                        <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
                          {node.role}
                        </Typography>
                        <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
                          {node.phoneNumber}
                        </Typography>
                      </Stack>
                    </Card>

                    {user.role === Role.admin || user.role === Role.director ? (
                      <>
                        <IconButton
                          size="large"
                          color="inherit"
                          sx={{ position: 'absolute', right: '1px', opacity: 0.99 }}
                          onClick={(event) => {
                            handleOpen(event);
                            handleGetUpdate(node.id);
                          }}
                        >
                          <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
                        </IconButton>
                        <MenuPopover
                          open={Boolean(open)}
                          anchorEl={open}
                          onClose={handleClose}
                          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                          arrow="right-top"
                          sx={{
                            mt: -0.5,
                            width: 'auto',
                            '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
                          }}
                        >
                          <MenuItem
                            onClick={() => {
                              handleClose();
                              onOpenUpdateUser();
                            }}
                          >
                            <Iconify icon={'eva:edit-fill'} sx={{ ...ICON }} />
                            Chỉnh sửa
                          </MenuItem>
                        </MenuPopover>
                      </>
                    ) : null}
                  </Stack>
                ))}
              </Stack>
            ) : null}
          </Stack>
        </>
      )}
      <UpdateOfGroupNode
        open={openUpdateUser}
        onClose={onCloseUpdateUser}
        row={expandedAdmin || expandedAccountant ? userUpdate : node}
      />
    </Stack>
  );
}
