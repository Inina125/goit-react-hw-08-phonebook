import ContactForm from 'components/contactForm/ContactForm';
import Filter from 'components/filter/Filter';
import ContactList from 'components/contactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { getError, getIsLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import {
  ContactsCont,
  HeadingPage,
  HeadingSection,
  SectionCont,
  Sections,
} from './Contacts.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsCont>
      <HeadingPage>Phonebook</HeadingPage>
      <Sections>
        <SectionCont>
          <HeadingSection>New Contact</HeadingSection>
          <ContactForm />
        </SectionCont>
        <SectionCont>
          <HeadingSection>Contacts</HeadingSection>
          <Filter />
          <ContactList />
        </SectionCont>
      </Sections>
      {isLoading && !error && <b>Request in progress...</b>}
    </ContactsCont>
  );
};

export default ContactsPage;
