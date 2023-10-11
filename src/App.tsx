import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import Home from './routes/home';
import Profile from './routes/profile';
import Login from './routes/login';
import CreateAccount from './routes/create-account';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/loading-screen';
import { auth } from './firebase';
import ProtectedRoute from './components/protected-route';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/create-account',
    element: <CreateAccount />
  }
]);

const GlobalStyles = createGlobalStyle`
  ${reset};

  *{
    box-sizing:border-box;
  }

  body{
    background-color:black;
    color:white;
}
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  // const [isLoading, setLoading] = useState(true);

  const init = async () => {
    console.log(auth.currentUser + '1번');
    await auth.authStateReady();
    console.log(`${auth.currentUser} + 2번`);

    // setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
      {/* {isLoading ? (
        <LoadingScreen />
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )} */}
    </Wrapper>
  );
}

export default App;
