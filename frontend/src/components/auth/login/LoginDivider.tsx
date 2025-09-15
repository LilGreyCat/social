import { Divider, Typography } from '@mui/material';

export default function LoginDivider() {

    return (
        <Divider
            sx={{
                my: 3,
                width: '100%',
                textAlign: 'center',
                cursor: 'default',
                userSelect: 'none',
            }}
        >
            <Typography variant="body2" color="text.secondary">
                or sign in with
            </Typography>
        </Divider>
    );
}
