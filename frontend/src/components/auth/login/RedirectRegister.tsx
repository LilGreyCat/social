import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";

export default function RedirectRegister() {

    return (
        <Box sx={boxSx}>
            <Typography variant="body2" color="text.secondary">
                Don't have an account yet?
            </Typography>
            <Button
                component={Link}
                href="/register"
                variant="text"
            >
                Register
            </Button>
        </Box>
    );
}

const boxSx = {
    position: 'absolute',
    bottom: 25,
    left: { xs: 20, sm: 50 },
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    userSelect: 'none',
    cursor: 'default',
};
