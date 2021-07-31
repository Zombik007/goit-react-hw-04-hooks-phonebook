import React from 'react';
import PropTypes from 'prop-types';

import styles from './Phonebook.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.phonebook__list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={styles.phonebook__item} key={id}>
            {name}: {number}
            <button
              className={styles.phonebook__button}
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
