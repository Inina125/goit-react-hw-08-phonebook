import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegisterCont, Title } from './RegisterForm.styled';
import { AuthForm, StyledButton, StyledInput, StyledLabel } from '../Styles';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterCont>
      <AuthForm onSubmit={handleSubmit} autoComplete="off">
        <Title>Register</Title>
        <StyledLabel>
          Username
          <StyledInput type="text" name="name" />
        </StyledLabel>
        <StyledLabel>
          Email
          <StyledInput type="email" name="email" />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledInput type="password" name="password" />
        </StyledLabel>
        <StyledButton type="submit">Register</StyledButton>
      </AuthForm>
    </RegisterCont>
  );
};

export default RegisterForm;
