import { FormCont } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { StyledButton, StyledInput, StyledLabel } from '../Styles';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.filter(item => item.name === name).length > 0) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <FormCont onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput type="text" name="name" placeholder="Enter contact name" />
      </StyledLabel>
      <StyledLabel>
        Phone
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Enter phone"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>

      <StyledButton type="submit">Add contact</StyledButton>
    </FormCont>
  );
};

export default ContactForm;
