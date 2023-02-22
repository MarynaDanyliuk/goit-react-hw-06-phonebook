import React from 'react';
import { useState, useEffect } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';

import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  const [contacts, setContact] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return contacts ? contacts : [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // ____add contact______________
  const formSubmitHandler = ({ name, number }) => {
    // const { name, number } = contacts;
    console.log({ name, number });
    const id = nanoid();
    const contactsList = [...contacts];
    if (
      contactsList.findIndex(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      ) !== -1
    ) {
      alert(`${name} is alredy in contacts!`);
    } else {
      setContact(prevContacts => {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        return [{ ...newContact }, ...prevContacts];
      });
      contactsList.push({ id, name, number });
    }
    console.log(contactsList);
  };

  const handleDelete = event => {
    const id = event.target.id;
    setContact(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleFilter = event => {
    // const { name, value } = event.target;
    setFilter(event.target.value);
    // setFilter({ [name]: value });
  };

  const handleNameFilter = () => {
    if (!filter) {
      return contacts;
    }
    const filterNormalize = filter.toLowerCase();

    const filterList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterNormalize);
    });
    return filterList;
  };

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

  return (
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
      <Form onSubmit={formSubmitHandler} />
      <h2 className={css.title}>Contacts</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <ContactsList contacts={handleNameFilter()} handleDelete={handleDelete} />
    </div>
  );
};

// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };
