import React from 'react';
import { store, persistor } from 'redux/store';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

import {
  addContact,
  deleteContact,
} from '../../redux/contacts/contacts-actions';
import { setFilter } from '../../redux/filter/filter-actions';

import {
  getAllContacts,
  getFilteredContacts,
  // handleNameFilter,
} from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

import css from './App.module.css';
// import { nanoid } from 'nanoid';

export const App = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();

    const result = allContacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  // ____add contact______________
  const handleAddContact = ({ name, number }) => {
    console.log({ name, number });
    if (isDublicate(name)) {
      alert(`${name} is alredy in contacts!`);
      return false;
    }
    dispatch(addContact({ name, number }));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const isContacts = Boolean(filteredContacts.length);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: `column`,
            marginLeft: 40,
            fontSize: 20,
            color: '#010101',
          }}
        >
          <h1 className={css.title}>Phonebook</h1>
          <Form onSubmit={handleAddContact} />
          <h2 className={css.title}>Contacts</h2>
          <Filter value={filter} handleFilter={handleFilter} />
          {isContacts && (
            <ContactsList
              items={filteredContacts}
              handleDelete={handleDelete}
            />
          )}
          {!isContacts && <p>No contacts in Phonebook</p>}
        </div>
      </PersistGate>
    </Provider>
  );
};

// __________________________________
// contactsList.findIndex(
//   contact => name.toLowerCase() === contact.name.toLowerCase()
// ) !== -1
// ______________________

// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// componentDidMount() {
//   const contacts = localStorage.getItem(`contacts`);
//   const parseContacts = JSON.parse(contacts);

//   if (parseContacts && parseContacts.length) {
//     this.setState({ contacts: parseContacts });
//   }
//   // console.log(parseContacts);
// }

// componentDidUpdate(prevState) {
//   const { contacts } = this.state;
//   if (contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }
// }
// _____________________________________________

// const handleFilter = event => {
//   setFilter(event.target.value);
// };

// const handleNameFilter = () => {
//   if (!filter) {
//     return contacts;
//   }
//   const filterNormalize = filter.toLowerCase();

//   const filterList = contacts.filter(contact => {
//     return contact.name.toLowerCase().includes(filterNormalize);
//   });
//   return filterList;
// };
