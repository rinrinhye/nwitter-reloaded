import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

export default function ProtectedRoute({
  children
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;
  console.log('여기는 프로텍티드라우트');
  if (user === null) {
    return <Navigate to='/login' />;
  }
  return children;
}
