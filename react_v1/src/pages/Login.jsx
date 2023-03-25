import React from 'react';
import Heading from '../components/ui/Heading';
import LoginForm from '../components/login/LoginForm';

export default function Login() {
  return (
    <>
      <Heading>Login</Heading>
      <article className="login-article">
        <LoginForm />
      </article>
    </>
  );
}
