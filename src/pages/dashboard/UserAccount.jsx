import {useTheme} from '@mui/material/styles';
import React, {useState} from 'react';
import {Box, Icon, IconButton, Stack, Typography} from "@mui/material";
import useAuth from "../../hooks/useAuth";
import MyAvatar from "../../components/MyAvatar";
import UserInfoPersonalPopup from "../../components/updateUser";
import useToggle from '../../hooks/useToggle';
// import MenuPopover from "../../components/MenuPopover";




export default function UserAccount() {
    const {user} = useAuth();


    const theme = useTheme();

    const [dataUserInfo, setDataUserInfo] = useState();
    const [isEdit, setIsEdit] = useState(false);

    const {toggle: isOpenUserInfoPopup, onOpen: onOpenUserInfoPopup, onClose: onCloseUserInfoPopup} = useToggle();
    const handleUpdateUserInformation = (dataInfo) => {
        setDataUserInfo(dataInfo);
        setIsEdit(true);
        onCloseUserInfoPopup();
    }

        return (
            <>
                <Box
                    sx={{
                        position: 'relative',
                        width: 320,
                        backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
                        boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
                    }}
                >
                    <Stack p={3} spacing={2} >
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant="h5">My Profile</Typography>
                            <IconButton onClick={onOpenUserInfoPopup}>
                                <Icon />
                            </IconButton>

                        </Stack>
                        <Box direction="row" alignItems="center" justifyContent="space-between">
                            <MyAvatar/>
                            <Typography noWrap variant="subtitle1">
                                {user?.story}
                            </Typography>
                        </Box>
                        <Stack direction="row" alignItems="center" spacing={2} sx={{py: 2, pr: 1, pl: 2.5}}>
                            <div>
                                <Typography noWrap variant="subtitle1">
                                    {user?.firstName} {user?.lastName}
                                </Typography>
                                <Typography noWrap variant="body2" sx={{color: 'text.secondary'}}>
                                    {user?.email}
                                </Typography>
                                <Typography noWrap variant="body2" sx={{color: 'text.secondary'}}>
                                    {user?.location}
                                </Typography>
                                <Typography noWrap variant="body2" sx={{color: 'text.secondary'}}>
                                    {user?.status}
                                </Typography>

                            </div>
                            <Stack>

                                <UserInfoPersonalPopup
                                    isOpen={isOpenUserInfoPopup}
                                    onClose={onCloseUserInfoPopup}
                                    user={user}
                                    handleUpdate={handleUpdateUserInformation}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </>
        );
    }

