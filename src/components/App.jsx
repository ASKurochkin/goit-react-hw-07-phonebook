import Container from './Container/Container';
import { FormPhone } from './Form/FormPhone';
import { ContactsList } from './ContactsList/ContactsList';
import Search from './Search/Search';
import { useSelector } from 'react-redux';

export const App = () => {
  const { contacts } = useSelector(state => state.contacts);

  return (
    <>
      <Container title="Phone book">
        <FormPhone />
      </Container>
      <Container title="Contacts">
        {contacts.length ? (
          <>
            <Search />
            <ContactsList />
          </>
        ) : (
          <p>Phone book is empty</p>
        )}
      </Container>
    </>
  );
};
