import { Button } from '@mui/material';
import LoginGreet from './LoginGreet';
import CredentialsField from './CredentialsField';
import PasswordField from '../PasswordField';
import LoginDivider from './LoginDivider';
import LoginOptions from './LoginOptions';

export default function LoginForm() {

    return (
        <>
            <LoginGreet />
            <CredentialsField />
            <PasswordField />
            <Button type="submit" variant="contained" fullWidth size="large" >
                Sign In
            </Button>
            <LoginDivider />
            <LoginOptions />
        </>
    );
}
