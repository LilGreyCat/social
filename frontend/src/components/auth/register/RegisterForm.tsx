import { Button, Stack } from '@mui/material';
import RegisterGreet from './RegisterGreet';
import PasswordField from '../PasswordField';
import UserDataField from '../UserDataField';
import BirthDateField from './BirthDateField';

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
            <UserDataField label="First Name" />
            <UserDataField label="Last Name" />
            {/* TODO: Add mui date picker */}
            <BirthDateField />
            <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
            >
                Sign Up
            </Button>
            {/* <RegisterDivider /> */}
            {/* <RegisterOptions /> */}
        </Stack>
    );
}
