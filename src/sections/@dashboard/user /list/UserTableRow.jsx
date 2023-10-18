import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Avatar, MenuItem, TableCell, TableRow, Typography } from '@mui/material';
// components
// import Label from '../../../../components/Label';
import Iconify from '../../../../components/Iconify';
import { TableMoreMenu } from '../../../../components/table';
// import useAuth from '../../../../hooks/useAuth';
// import useToggle from '../../../../hooks/useToggle';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
UserTableRow.propTypes = {
  idx: PropTypes.number,
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  // onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
  onResetPassword: PropTypes.func,
  onResetAccount: PropTypes.func,
  onDeleteUserInfo: PropTypes.func,
};

export default function UserTableRow({
  row,
  selected,
  onEditRow,
  idx,
  // onSelectRow,
  onDeleteRow,
  onResetPassword,
  onResetAccount,
  onDeleteUserInfo,
}) {
  // const theme = useTheme();
  const { email, firstName, lastName, story, avatarUrl } = row;
  const [openMenu, setOpenMenuActions] = useState(null);
  // const [userInfoId, setUserInfoId] = useState(null);
  // const [dataUserInfo, setDataUserInfo] = useState();
  // const [isEdit, setIsEdit] = useState(false);

  // const { toggle: isOpenUserInfoPopup, onOpen: onOpenUserInfoPopup, onClose: onCloseUserInfoPopup } = useToggle();
  // const { toggle: isOpenNewUpdateInfo, onOpen: onOpenNewUpdateInfo, onClose: onCloseNewUpdateInfo } = useToggle();

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  // const handleAddUserInformation = () => {
  //   onCloseUserInfoPopup();
  //   onOpenNewUpdateInfo();
  // };
  //
  // const handleUpdateUserInformation = (dataInfo) => {
  //   setDataUserInfo(dataInfo);
  //   setIsEdit(true);
  //   onCloseUserInfoPopup();
  //   onOpenNewUpdateInfo();
  // };
  // const { user } = useAuth();
  return (
    <TableRow
      hover
      // onDoubleClick={() => {
      //   onOpenUserInfoPopup();
      //   setUserInfoId(id);
      // }}
      selected={selected}
    >
      {/* {status !== 'Ngừng hoạt động' && ( */}
      {/*  <TableCell padding="checkbox"> */}
      {/*    <Checkbox size="small" checked={selected} onClick={onSelectRow} /> */}
      {/*  </TableCell> */}
      {/* )} */}
      <TableCell align="left">{idx + 1}</TableCell>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt={firstName} src={avatarUrl} sx={{ mr: 2, width: 30, height: 30 }} />
        <Typography variant="subtitle2" noWrap>
          {firstName}
        </Typography>
      </TableCell>

      <TableCell align="left">{lastName}</TableCell>

      <TableCell align="left">{email}</TableCell>

      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {story}
      </TableCell>

      <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onDeleteUserInfo();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                Xóa TTCN
              </MenuItem>
              {row?.isActive === true && (
                <MenuItem
                  onClick={() => {
                    onDeleteRow();
                    handleCloseMenu();
                  }}
                  sx={{ color: 'error.main' }}
                >
                  <Iconify icon={'eva:trash-2-outline'} />
                  Xóa
                </MenuItem>
              )}
              {row?.isActive === false && (
                <MenuItem
                  onClick={() => {
                    onResetAccount();
                    handleCloseMenu();
                  }}
                  sx={{ color: '#1877F2' }}
                >
                  <Iconify icon={'system-uicons:reset'} />
                  Khôi phục
                </MenuItem>
              )}
              <MenuItem
                sx={{ minWidth: 170 }}
                onClick={() => {
                  onEditRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:edit-fill'} />
                Sửa thông tin
              </MenuItem>

              <MenuItem
                sx={{ minWidth: 170 }}
                onClick={() => {
                  onResetPassword();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'material-symbols:lock-reset-rounded'} /> Cài lại mật khẩu
              </MenuItem>
            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}
