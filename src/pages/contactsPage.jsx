import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Text } from 'components/ContactForm/ContactForm.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'pages/homePage.styled';
import { Loader } from 'components/loader/loader';
import { useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'Redux/selectors';

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Container>
        {error && <p>Whoops, something went wrong: {error}</p>}
        <ContactForm />
        {contacts && contacts?.length > 0 && (
          <>
            <Text>Contacts</Text>
            <Filter />
            <ContactList />
          </>
        )}
        {isLoading && <Loader />}
      </Container>
    </>
  );
};

export default ContactsPage;
