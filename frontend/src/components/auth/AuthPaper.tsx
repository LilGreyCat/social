import { Paper, PaperProps, Stack } from '@mui/material';
import Logo from '../Logo'

interface AuthPaperProps extends PaperProps {
    children: React.ReactNode;
}

export default function AuthPaper({ children, ...props }: AuthPaperProps) {

    return (
        <Paper sx={paperSx} elevation={4} {...props}>
            <Logo width={50} height={50} customSx={logoSx} />
            <Stack direction="column" spacing={4} alignItems="flex-start" >
                {children}
            </Stack>
        </Paper>
    );
}

const paperSx = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    p: { xs: 4, sm: 10 },
    m: { xs: 0, sm: 'auto' },
    borderRadius: { xs: 0, sm: 2 },
    height: "100%",
    minHeight: { sm: "814px" },
    maxWidth: "750px",
};

const logoSx = {
    position: "absolute",
    top: 50,
    left: { xs: 20, sm: 50 },
};
