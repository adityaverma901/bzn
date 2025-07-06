"use client"
import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const [user, setUser] = useState()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const data = { email, password };
    console.log("data", data);
    console.log("frontend", user);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      console.log("data", data);

      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(responseData.message || 'Login failed');
      }

      // Store the token
      localStorage.setItem('token', responseData.token);
      localStorage.setItem('id', responseData.user.id);
      localStorage.setItem('user', responseData.user.name);
      localStorage.setItem('email', responseData.user.email);
      console.log('User info:', responseData.user);
      console.log('Token:', responseData.token);
      setUser(responseData.user)

      // Successful login
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };
return(
  <div className='flex justify-center items-center h-screen gap-10 bg-gray-100'>
    <div>a</div>
    <div>b</div>

  </div>
)
};
export default Login;