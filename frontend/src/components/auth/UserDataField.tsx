import { InputAdornment, TextField } from '@mui/material';

interface RegisterFieldProps {
    label: string;
    type?: string;
    adornment?: React.ReactNode;
};

export default function UserDataField(
    { label, type = "text", adornment }: RegisterFieldProps
) {

    return (
        <TextField
            label={label}
            type={type}
            variant="outlined"
            fullWidth
            required
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            {adornment}
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
}
