import { Box, BoxProps } from '@mui/material';

interface LeftPanelProps extends BoxProps {
    children?: React.ReactNode;
}

export default function LeftPanel({ children, ...props }: LeftPanelProps) {

    return (
        <Box sx={boxSx} {...props}>
            {children}
        </Box>
    );
}

const boxSx = {
    flex: { xs: 1, lg: "0 0 750px" },
    p: { xs: 0, sm: 6 },
    overflowY: "auto",
};
