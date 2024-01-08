import React, { useState } from 'react';
import { registerUser } from '../../services/authService'; // Assuming you have a similar service for registration
import Logo from '../../components/common/Logo';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.error("Passwords do not match!");
            // TODO: Show error message
            return;
        }
        const response = await registerUser({ name, email, password });
        console.log(response);
    };

    return (
        <div className="flex justify-center items-center md:h-screen">
            <form className="bg-zinc-800 shadow-md rounded-lg px-10 py-10 mb-4 w-full md:max-w-md" onSubmit={handleSubmit}>
                <div className="flex justify-center items-center mb-2">
                    <Logo isVertical={true}/>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>

                <div className="flex flex-col">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
