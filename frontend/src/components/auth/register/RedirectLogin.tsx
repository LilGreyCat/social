import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";

export default function RedirectLogin() {

    return (
        <Box sx={boxSx}>
            <Typography variant="body2" color="text.secondary">
                Already have an account?
            </Typography>
            <Button
                component={Link}
                href="/login"
                variant="text"
            >
                Login
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
