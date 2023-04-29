import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { AuthForm, StyledButton, StyledInput, StyledLabel } from '../Styles';
import { LoginCont, Title } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginCont>
      <AuthForm onSubmit={handleSubmit} autoComplete="off">
        <Title>Login</Title>
        <StyledLabel>
          Email
          <StyledInput type="email" name="email" />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledInput type="password" name="password" />
        </StyledLabel>
        <StyledButton type="submit">Log In</StyledButton>
      </AuthForm>
    </LoginCont>
  );
};

export default LoginForm;
