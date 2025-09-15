import { AccountCircle } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';

export default function CredentialsField() {

    return (
        <TextField
            label="Username or Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end" >
                            <AccountCircle sx={{ color: 'text.secondary' }} />
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
}
