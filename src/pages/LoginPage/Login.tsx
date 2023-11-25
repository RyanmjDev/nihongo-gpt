import React, { useState } from 'react';
import { loginUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';

type Credentials = {
    username: string;
    password: string;
};


const Login = () => {
    const [credentials, setCredentials] = useState<Credentials>({ username: '', password: '' });
    const navigate = useNavigate();  

    const handleLogin = async () => {
        try {
            const user = await loginUser(credentials);
            navigate('/chat'); 
        } catch (error) {
            console.log(error)
        }
    };


};
