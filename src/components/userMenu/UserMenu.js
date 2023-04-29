import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks';
import { LogoutBtn, UserCont, WelcomeMsg } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserCont>
      <WelcomeMsg>Welcome, {user.name}</WelcomeMsg>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutBtn>
    </UserCont>
  );
};

export default UserMenu;
