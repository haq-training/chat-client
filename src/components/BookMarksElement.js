import {Avatar, Box, Stack, Typography, Icon} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {File} from 'phosphor-react';



const BookMarkElement = ({ id, name, img, msg }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: '100%',
                borderRadius: 1,
                backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
            }}
            p={2}
        >
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={2}>
                    {(
                        <Box overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                            <File src={img} size={32} />
                        </Box>
                    )}

                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{name}</Typography>
                        <Typography variant="caption">{msg  }</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};

export default BookMarkElement;
