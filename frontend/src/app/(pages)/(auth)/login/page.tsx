"use client";

import { Stack } from "@mui/material";
import LeftPanel from "@/components/auth/LeftPanel";
import RightPanel from "@/components/auth/RightPanel";

export default function LoginPage() {

    return (
        <Stack direction="row" sx={{ height: "100vh", width: "100%" }} >
            <LeftPanel />
            <RightPanel />
        </Stack>
    );
}
