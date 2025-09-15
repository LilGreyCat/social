"use client";

import LeftPanel from "@/components/auth/LeftPanel";
import { Stack } from "@mui/material";

export default function LoginPage() {

    return (
        <Stack direction="row" sx={{ height: "100vh", width: "100%" }} >
            <LeftPanel />
        </Stack>
    );
}
