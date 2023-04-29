import styled from 'styled-components';

const UserCont = styled.div`
  display: flex;
  align-items: center;
  gap: 0 16px;
`;

const WelcomeMsg = styled.p`
  font-weight: 500;
`;

const LogoutBtn = styled.button`
  font-size: 12px;
  padding: 0 16px;
  height: 26px;
  line-height: 26px;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  background-color: #00a6ff;
  color: white;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;

export { UserCont, WelcomeMsg, LogoutBtn };
