import { Button, Stack } from '@mui/material';
import RegisterGreet from './RegisterGreet';
import PasswordField from '../PasswordField';
import UserDataField from '../UserDataField';
import AuthDivider from '../AuthDivider';
import AuthOptions from '../AuthOptions';

export default function RegisterForm() {

    return (
        <Stack
            component="form"
            direction="column"
            spacing={3}
            alignItems="flex-start"
        >
            <RegisterGreet />
            <UserDataField label="Username" required />
            <UserDataField label="Email" type="email" required />
            <PasswordField />
            <PasswordField confirm />
            <UserDataField label="First Name" required />
            <UserDataField label="Last Name"  required />
            <UserDataField label="Birth Date" type="date" required />
            <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
            >
                Sign Up
            </Button>
            <AuthDivider labelText='or sign up with'/>
            <AuthOptions />
        </Stack>
    );
}
