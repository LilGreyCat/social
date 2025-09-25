import { InputAdornment, TextField } from '@mui/material';

interface RegisterFieldProps {
    label: string;
    type?: string;
    adornment?: React.ReactNode;
    required?: boolean;
};

export default function UserDataField({
    label,
    type = "text",
    adornment,
    required = false,
}: RegisterFieldProps) {

    return (
        <TextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      required={required}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              {adornment}
            </InputAdornment>
          ),
        },
        inputLabel: type === 'date' ? { shrink: true } : undefined,
      }}
    />
    );
}
