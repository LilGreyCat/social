import { Button, Stack } from '@mui/material';
import LoginGreet from './LoginGreet';
import CredentialsField from './CredentialsField';
import PasswordField from '../PasswordField';
import LoginDivider from './LoginDivider';
import LoginOptions from './LoginOptions';

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
            <LoginDivider />
            <LoginOptions />
        </Stack>
    );
}

