import {
  ContactDetails,
  DeleteBtn,
  Item,
  ListCont,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  if (!contacts) return null;

  let contactItems = contacts;
  if (filter) {
    contactItems = contactItems.filter(item => item.name.includes(filter));
  }

  return (
    <ListCont>
      {contactItems.map(contact => (
        <Item key={contact.id}>
          <ContactDetails>
            {contact.name}: {contact.number}
          </ContactDetails>
          <DeleteBtn onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </ListCont>
  );
};

export default ContactList;
