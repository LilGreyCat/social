import { Divider, Typography } from '@mui/material';

interface AuthDividerProps {
    labelText: string;
}

export default function AuthDivider({labelText}: AuthDividerProps) {

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
                {labelText}
            </Typography>
        </Divider>
    );
}
