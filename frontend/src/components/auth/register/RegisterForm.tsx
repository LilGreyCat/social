import { Button } from '@mui/material';
import RegisterGreet from './RegisterGreet';
import PasswordField from '../PasswordField';

export default function RegisterForm() {

    return (
        <>
            <RegisterGreet />
            <PasswordField />
            <PasswordField confirm />
            <Button type="submit" variant="contained" fullWidth size="large" >
                Sign Up
            </Button>
            {/* <RegisterDivider /> */}
            {/* <RegisterOptions /> */}
        </>
    );
}
