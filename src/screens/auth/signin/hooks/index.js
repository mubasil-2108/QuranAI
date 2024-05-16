import { navigate } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"
import { useState } from 'react';

export function useHooks() {

    const handleLogin = (email, password) => {
        navigate(routes.app)
    }

    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return {
        handleLogin,
        toggleCheckbox,
        togglePasswordVisibility,
        setEmail,
        email,
        showPassword,
        setPassword,
        password,
        isChecked
    }
}