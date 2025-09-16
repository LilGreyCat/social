import { usePasswordToggle } from "@/hooks/usePasswordToggle";
import { TextField } from "@mui/material";
import VisibilityAdornment from "./VisibilityAdornment";

interface PasswordFieldProps {
    confirm?: boolean;
};

export default function PasswordField(
    {
        confirm = false
    }: PasswordFieldProps) {
    const { type, visible, toggle } = usePasswordToggle();

    return (
        <TextField
            label={confirm ? "Confirm Password" : "Password"}
            type={type}
            variant="outlined"
            fullWidth
            required
            slotProps={{
                input: {
                    endAdornment: (
                        <VisibilityAdornment
                            show={visible}
                            toggle={toggle}
                        />
                    ),
                },
            }}
        />
    );
}
