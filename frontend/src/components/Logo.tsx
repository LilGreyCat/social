import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Logo(
    {
        width = 100,
        height = 100,
        customSx = {}
    }: {
        width?: number;
        height?: number;
        customSx?: object;
    }) {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                ...customSx,
                cursor: 'default',
                userSelect: 'none'
            }}
        >
            <Image
                src="/logo.png"
                alt="logo"
                width={width}
                height={height}
            />
            <Stack
                direction="column"
                alignItems="flex-start"
                spacing={-1}
                sx={{ ml: 1, pb: 0.5 }}
            >
                <Typography
                    variant="logo"
                    color="text.secondary"
                    sx={{ fontSize: '1.2rem' }}
                >
                    Social
                </Typography>
                <Typography
                    variant="logo"
                    color="text.secondary"
                    sx={{ fontSize: '1.2rem', pl: 1.5 }}
                >
                    Network
                </Typography>
            </Stack>
        </Stack>
    );
}
