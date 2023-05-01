'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const LoginForm: React.FC = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [cookies, setCookies] = useCookies(['token']);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const path = process.env.NEXT_PUBLIC_SERVER_PATH;
    try {
      const response = await axios.post(`${path}/auth/signIn`, form);
      setCookies('token', response.data.accessToken);
      window.location.href = '/admin';
    } catch (error) {
      console.error(error);
      alert('ID 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" bg-gray-200 rounded-sm p-4 w-1/3 flex flex-col space-y-5">
      <div className="flex space-x-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
          />
        </svg>
        <input type="text" name="email" onChange={handleChange} placeholder="ID" className="w-full" />
      </div>
      <div className="flex space-x-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
        <input type="password" name="password" onChange={handleChange} placeholder="Password" className="w-full" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
