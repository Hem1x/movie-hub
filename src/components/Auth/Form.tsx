import { FC, useState } from 'react';
import styles from './Form.module.scss';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

interface FormProps {
  title: string;
  errorMessage: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick, errorMessage }) => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const bottomMessage =
    title === 'вход' ? 'Если у вас нет аккаунта зарегистрируйте' : 'Уже есть аккаунт?';

  return (
    <div className={styles.container} style={{}}>
      <h1>
        <span>Movie</span>Hub
      </h1>
      <div className={styles.form}>
        <div
          className={styles.inputs}
          style={
            errorMessage.length !== 0 ? { marginBottom: '2px' } : { marginBottom: '2rem' }
          }>
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            type={showPass ? 'text' : 'password'}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <div onClick={() => setShowPass(!showPass)} className={styles.showPass}>
            {showPass ? 'Скрыть' : 'Показать'}
          </div>
        </div>

        {errorMessage.length !== 0 && <div className={styles.error}>{errorMessage}</div>}

        <button className={styles.formBtn} onClick={() => handleClick(email, pass)}>
          {title}
        </button>
      </div>
      <div
        className={styles.switcher}
        onClick={() => navigate(`/${title === 'вход' ? 'register' : 'login'}`)}>
        <p style={{ color: '#000' }}>{bottomMessage}</p>
      </div>
    </div>
  );
};

export default Form;
