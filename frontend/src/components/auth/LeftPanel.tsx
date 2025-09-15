import { Box } from '@mui/material';
import AuthPaper from './AuthPaper';
import LoginForm from './login/LoginForm';
import RedirectRegister from './login/RedirectRegister';

export default function LeftPanel() {

    return (
        <Box sx={boxSx}>
            <AuthPaper>
                <LoginForm />
                <RedirectRegister />
            </AuthPaper>
        </Box>
    );
}

const boxSx = {
    flex: { xs: 1, lg: "0 0 750px" },
    p: { xs: 0, sm: 6 },
    overflowY: "auto",
};
