"use client";

import { Stack } from "@mui/material";
import LeftPanel from "@/components/auth/LeftPanel";
import RightPanel from "@/components/auth/RightPanel/RightPanel";
import AuthPaper from "@/components/auth/AuthPaper";
import RedirectLogin from "@/components/auth/register/RedirectLogin";
import RegisterForm from "@/components/auth/register/RegisterForm";

export default function RegisterPage() {

    return (
        <Stack direction="row" sx={{ height: "100vh", width: "100%" }} >
            <LeftPanel>
                <AuthPaper>
                    <RegisterForm />
                    <RedirectLogin />
                </AuthPaper>
            </LeftPanel>
            <RightPanel />
        </Stack>
    );
}
