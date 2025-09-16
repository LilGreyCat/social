import { Typography, Box } from "@mui/material";

export default function RegisterGreet() {

    return (
        <Box sx={{ cursor: 'default', userSelect: 'none' }} >
            <Typography variant="subtitle2" color="text.secondary" >
                Join us today 🎉
            </Typography>
            <Typography variant="h6" fontWeight={600} color="text.highlight" gutterBottom >
                Create your account
            </Typography>
        </Box>
    );
}
