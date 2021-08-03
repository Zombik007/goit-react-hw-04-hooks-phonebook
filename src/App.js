import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './Phonebook/ContactForm';
import FilterContact from './Phonebook/FilterContact';
import ContactList from './Phonebook/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(() => contacts.filter(contact => contact.id !== contactId));
  };

  const addContactOnFormSubmit = data => {
    setContacts(contact => [
      ...contact,
      (contact = {
        id: uuidv4(),
        name: data.name,
        number: data.number,
      }),
    ]);
  };

  const searchFilterContact = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizeFilter),
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactOnFormSubmit} />

      <h2>Contacts</h2>
      <FilterContact value={filter} onChange={searchFilterContact} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
