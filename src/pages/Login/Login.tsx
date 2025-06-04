import { type FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@component/button/button.tsx';
import type { IObjectLiteral } from '@/types/type';

interface LoginFormProps {
  users?: any;
  signUp: (formData?: any) => void;
  signIn: (formData?: any) => void;
}

const Login: FC<LoginFormProps> = (props) => {
  const navigate = useNavigate();
  const { signUp, signIn, users } = props;
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const handleSubmit = () => {
    if (!id || !password) return alert('All fields required');

    if (isSignUp) {
      if (
        users?.users?.length > 0 &&
        users?.users?.find((user: IObjectLiteral) => user.id === id)
      ) {
        return alert('User already exists');
      }
      signUp({ id, password });
      alert('User registered. You can now log in.');
      setIsSignUp(false);
    } else {
      const checkUserExist = users?.users?.find(
        (usersItems: IObjectLiteral) =>
          usersItems?.id === id && usersItems?.password === password
      );
      signIn({ id, password });
      if (checkUserExist) {
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: '400px', width: '100%' }}
      >
        <h2 className="text-center mb-4">{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          className={'btn btn-primary w-100 mb-2'}
          title={isSignUp ? 'Sign Up' : 'Login'}
          onClickHandler={handleSubmit}
        />
        <div className="text-center">
          <small>
            {isSignUp ? 'Already have an account?' : 'New here?'}{' '}
            <span
              className="text-primary fw-semibold"
              role="button"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Login' : 'Sign Up'}
            </span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
