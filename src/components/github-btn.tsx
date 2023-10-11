import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import styled from 'styled-components';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Button = styled.span`
  cursor: pointer;
  margin-top: 50px;
  background-color: #fff;
  font-weight: 600;
  padding: 10px 20px;
  width: 100%;
  color: black;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GithubBtn() {
  const navigate = useNavigate();

  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Button onClick={onClick}>
      <Logo src='/public/github-logo.svg' />
      Continue with Github
    </Button>
  );
}
