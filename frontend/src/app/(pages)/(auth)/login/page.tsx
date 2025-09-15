"use client";

import { Stack } from "@mui/material";
import LeftPanel from "@/components/auth/LeftPanel";
import RightPanel from "@/components/auth/RightPanel";
import AuthPaper from "@/components/auth/AuthPaper";
import LoginForm from "@/components/auth/login/LoginForm";
import RedirectRegister from "@/components/auth/login/RedirectRegister";

export default function LoginPage() {

    return (
        <Stack direction="row" sx={{ height: "100vh", width: "100%" }} >
            <LeftPanel>
                <AuthPaper>
                    <LoginForm />
                    <RedirectRegister />
                </AuthPaper>
            </LeftPanel>
            <RightPanel />
        </Stack>
    );
}
