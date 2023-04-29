import styled from 'styled-components';

const ListCont = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const Item = styled.li`
  display: flex;
  min-width: 300px;
  color: #333;
  align-items: center;
  height: 48px;
  line-height: 48px;
  justify-content: space-between;
`;

const ContactDetails = styled.span``;

const DeleteBtn = styled.button`
  font-size: 12px;
  padding: 0 16px;
  height: 22px;
  line-height: 21px;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  background-color: #ff5039;
  color: white;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;

export { ListCont, Item, DeleteBtn, ContactDetails };
