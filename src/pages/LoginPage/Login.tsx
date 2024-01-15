import React, { useState } from 'react';
import {loginUser, loginDemoUser} from '../../services/authService'
import Logo from '../../components/common/Logo';
import BtnDivider from './BtnDivider';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const response = await loginUser({email, password});
        console.log(response);
    };

    const handleDemo = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const response = await loginDemoUser();
        console.log(response);
    }

    const directToRegister = () => {
        window.location.href = '/register';
    }

    


    return ( 

    <div className="h-screen w-screen bg-zinc-800 md:bg-transparent ">
        <div className="flex flex-col w-full h-full md:h-screen bg-fixed bg-center bg-cover md:items-center md:justify-center ">
        <form className="bg-zinc-800 md:shadow-md rounded-lg px-10 py-10 mb-4 w-full max-w-md mx-auto">                
                <div className="flex justify-center items-center mb-4">
                    <Logo isVertical={true}/>
                </div>
    
                <div className="mb-2">
                    <input
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-300 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        aria-label="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
    
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-300 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        aria-label="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="flex flex-col">
                        <button
                                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
                                type="submit"
                                onClick={handleSubmit}
                        >
                                Login
                        </button>

                        <button
                                className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
                                type="button"
                                onClick={handleDemo}
                        >
                               Try Demo
                        </button>

                        <BtnDivider />


                        <button
                                className="border border-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                type="button"
                                onClick={directToRegister}
                                >
                                Register
                        </button>
                </div>
            </form>
        </div>
        </div>
    );
};    

export default Login;
