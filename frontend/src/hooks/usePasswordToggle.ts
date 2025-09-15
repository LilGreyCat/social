import { useState, useCallback } from 'react';

export const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false);

    const toggle = useCallback(() => {
        setVisible((vis) => !vis);
    }, []);

    return {
        type: visible ? 'text' : 'password',
        visible,
        toggle,
    };
}
