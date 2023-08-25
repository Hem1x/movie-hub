import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../../store/hooks';
import { setUser } from '../../store/features/userSlice';
import Form from './Form';
import { auth } from '../../firebase';
import { FirebaseError } from 'firebase/app';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState('');

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate('/');
      })
      .catch((error) => {
        if (error instanceof FirebaseError && error.code.startsWith('auth/')) {
          const errorCode = error.code.replace('auth/', '');
          if (errorCode === 'invalid-email') {
            setErrMessage('Неверный формат почты');
          } else if (errorCode === 'wrong-password') {
            setErrMessage('Неверный пароль');
          } else if (errorCode === 'user-not-found') {
            setErrMessage('Вы не зарегистрированы');
          } else {
            setErrMessage(`Ошибка: ${errorCode}`);
          }
        } else {
          setErrMessage(`Произошла неизвестная ошибка:${error}`);
        }
      });
  };

  return <Form title="вход" handleClick={handleLogin} errorMessage={errMessage} />;
};

export default Login;
