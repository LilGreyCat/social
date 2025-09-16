import { AccountCircle } from '@mui/icons-material';
import UserDataField from '../UserDataField';

export default function CredentialsField() {

    return (
        <UserDataField
            label="Username or Email"
            required
            adornment={
                <AccountCircle
                    sx={{ color: 'text.secondary' }}
                />
            }
        />
    );
}
