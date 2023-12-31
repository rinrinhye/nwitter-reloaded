import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import {
  Input,
  Title,
  Wrapper,
  Form,
  Switcher,
  Error
} from '../components/auth-components';
import GithubBtn from '../components/github-btn';

export default function CreateAccount() {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('여기는크리에이티드');
    console.log(auth.currentUser);
    setError('');
    if (isLoading || name === '' || email === '' || password === '') return;
    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credentials.user);
      await updateProfile(credentials.user, { displayName: name });
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
      <Title>Join to 🐥</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          value={name}
          name='name'
          placeholder='Name'
          type='text'
          required
        />
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
        <Input
          type='submit'
          value={isLoading ? 'Loading...' : 'Create Account'}
        />
      </Form>
      {error !== '' ? <Error>{error}</Error> : null}
      <Switcher>
        Already have an account? <Link to='/login'>Log in &rarr;</Link>
      </Switcher>
      <GithubBtn />
    </Wrapper>
  );
}
