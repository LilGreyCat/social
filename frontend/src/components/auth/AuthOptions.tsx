import { Stack, Button } from "@mui/material";
import { Google, GitHub, Apple } from "@mui/icons-material";
import Discord from "@/components/auth/Discord";

export default function AuthOptions() {

    return (
        <Stack direction="row" spacing={1} width="100%" >
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
