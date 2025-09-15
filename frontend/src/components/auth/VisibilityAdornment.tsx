import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';

export default function VisibilityAdornment({
    show,
    toggle
}: {
    show: boolean;
    toggle: () => void;
}) {

    return (
        <InputAdornment position="end" >
            <IconButton
                onClick={toggle}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
                aria-label={show ? "Hide password" : "Show password"}
            >
                {
                    show
                        ? <Visibility sx={{ color: 'text.secondary' }} />
                        : <VisibilityOff sx={{ color: 'text.secondary' }} />
                }
            </IconButton>
        </InputAdornment>
    );
}
