import { useAuth } from '../hooks';
import { Nav } from './Navigation.styled';
import { StyledNavLink } from '../Styles';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Nav>
  );
};

export default Navigation;
