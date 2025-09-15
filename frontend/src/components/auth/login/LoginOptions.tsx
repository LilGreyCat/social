import { Stack, Button } from "@mui/material";
import { Google, GitHub, Apple } from "@mui/icons-material";
import Discord from "@/components/auth/Discord";

export default function LoginOptions() {

    return (
        <Stack direction="row" spacing={2} width="100%" >
            <Button variant="outlined" fullWidth size="large" >
                <Google />
            </Button>
            <Button variant="outlined" fullWidth size="large" >
                <GitHub />
            </Button>
            <Button variant="outlined" fullWidth size="large" >
                <Apple />
            </Button>
            <Button variant="outlined" fullWidth size="large" >
                <Discord />
            </Button>
        </Stack>
    );
}
