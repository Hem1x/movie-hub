import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../../store/hooks';
import { setUser } from '../../store/features/userSlice';
import Form from './Form';
import { auth } from '../../firebase';
import { FirebaseError } from 'firebase/app';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState('');

  const handleRegister = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
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
          } else if (errorCode === 'email-already-in-use') {
            setErrMessage('Эта почта уже используется');
          } else if (errorCode === 'missing-password') {
            setErrMessage('Требуется пароль');
          } else if (errorCode === 'weak-password') {
            setErrMessage('Слабый пароль');
          } else {
            setErrMessage(`Ошибка:${errorCode}`);
          }
        } else {
          setErrMessage(`Произошла неизвестная ошибка:${error}`);
        }
      });
  };

  return (
    <Form
      title="зарегистрироваться"
      handleClick={handleRegister}
      errorMessage={errMessage}
    />
  );
};

export default SignUp;
