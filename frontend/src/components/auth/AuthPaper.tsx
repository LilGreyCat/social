import { Paper, PaperProps, Box } from '@mui/material';
import Logo from '../Logo'

interface AuthPaperProps extends PaperProps {
    children?: React.ReactNode;
}

export default function AuthPaper({ children, ...props }: AuthPaperProps) {

    return (
        <Paper sx={paperSx} elevation={4} {...props}>
            <Logo width={50} height={50} customSx={logoSx} />
            <Box sx={boxSx}>
                {children}
            </Box>
        </Paper>
    );
}

const paperSx = {
    position: "relative",
    p: { xs: 4, sm: 10 },
    m: { xs: 0, sm: 'auto' },
    borderRadius: { xs: 0, sm: 2 },
    height: "auto",
    minHeight: { xs: "100vh", sm: "814px" },
    maxWidth: "750px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const logoSx = {
    position: "absolute",
    top: 50,
    left: { xs: 20, sm: 50 },
};

const boxSx = {
    mt: 12,
    mb: 6,
    height: "auto",
    width: "100%",
};
