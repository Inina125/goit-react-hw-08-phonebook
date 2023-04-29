import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  color: #555555;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #2299ff;
  }
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background-color: white;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  padding: 30px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
  color: #323232;
  font-weight: 500;
  margin-bottom: 22px;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 36px;
  line-height: 36px;
  padding: 0 15px;
  border: 1px solid #777;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled.button`
  min-width: 150px;
  height: 36px;
  line-height: 35px;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  background-color: #4e7bff;
  color: white;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;

export { StyledNavLink, AuthForm, StyledLabel, StyledInput, StyledButton };
