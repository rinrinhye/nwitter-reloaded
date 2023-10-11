import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../components/auth-components';
import {
  Input,
  Title,
  Wrapper,
  Form,
  Switcher,
  Error
} from '../components/auth-components';
import GithubBtn from '../components/github-btn';

export default function Login() {
  console.log(auth.currentUser);
  console.log('하잉');

  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setError('');
    if (isLoading || email === '' || password === '') return;
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Title>Log into 🐥</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          value={email}
          name='email'
          placeholder='Email'
          type='email'
          required
        />
        <Input
          onChange={onChange}
          value={password}
          name='password'
          placeholder='Password'
          type='password'
          required
        />
        <Input type='submit' value={isLoading ? 'Loading...' : 'Log in'} />
      </Form>
      {error !== '' ? <Error>{error}</Error> : null}
      <Switcher>
        Don't have an account?{' '}
        <Link to='/create-account'>Create one &rarr;</Link>
      </Switcher>
      <GithubBtn />
    </Wrapper>
  );
}
