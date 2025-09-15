import { usePasswordToggle } from "@/hooks/usePasswordToggle";
import { TextField } from "@mui/material";
import VisibilityAdornment from "./VisibilityAdornment";

export default function PasswordField() {
    const { type, visible, toggle } = usePasswordToggle();

    return (
        <TextField
            label="Password"
            type={type}
            variant="outlined"
            fullWidth
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
