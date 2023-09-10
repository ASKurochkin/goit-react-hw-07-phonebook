import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Container from './Container/Container';
import { FormPhone } from './Form/FormPhone';
import { ContactsList } from './ContactsList/ContactsList';
import Search from './Search/Search';

import { fetchContacts } from '../redux/thunk';
import { getContacts, getIsLoading, getError } from '../redux/selectors';

export const App = () => {
  const { contacts } = useSelector(getContacts);

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container title="Phone book">
        <FormPhone />
      </Container>
      <Container title="Contacts">
        {isLoading && !error && <b>Request in progress...</b>}
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
