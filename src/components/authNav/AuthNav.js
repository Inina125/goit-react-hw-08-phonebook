import { StyledNavLink } from '../Styles';
import { AuthCont } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthCont>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </AuthCont>
  );
};

export default AuthNav;
