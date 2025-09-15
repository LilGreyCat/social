import { Typography, Box } from "@mui/material";

export default function LoginGreet() {

    return (
        <Box sx={{ cursor: 'default', userSelect: 'none' }} >
            <Typography variant="subtitle2" color="text.secondary" >
                Welcome back 🙂
            </Typography>
            <Typography variant="h6" fontWeight={600} color="text.highlight" gutterBottom >
                Log in to your account
            </Typography>
        </Box>
    );
}
