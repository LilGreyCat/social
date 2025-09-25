import { Button, Stack } from '@mui/material';
import LoginGreet from './LoginGreet';
import CredentialsField from './CredentialsField';
import PasswordField from '../PasswordField';
import AuthDivider from '../AuthDivider';
import AuthOptions from '../AuthOptions';

export default function LoginForm() {

    return (
        <Stack
            component="form"
            direction="column"
            spacing={4}
            alignItems="flex-start"
        >
            <LoginGreet />
            <CredentialsField />
            <PasswordField />
            <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
            >
                Sign In
            </Button>
            <AuthDivider labelText="or sign in with" />
            <AuthOptions />
        </Stack>
    );
}

