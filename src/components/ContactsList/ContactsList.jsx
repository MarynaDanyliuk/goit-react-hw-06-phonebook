import css from './ContactsList.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-slice';

export const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const elements = filteredContacts.map(({ id, name, number }) => (
    <li key={id} className={css.contact}>
      {name}: {number}
      <button
        className={css.button}
        id={id}
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  ));

  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ul className={css[`contact-list`]}>{elements}</ul>
    </div>
  );
};

ContactsList.defaultProps = {
  items: [],
};

// _____________________________________________________________
// import PropTypes from 'prop-types';
// import { getAllContacts } from 'redux/contacts/contacts-selectors';
// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   handleDelete: PropTypes.func.isRequired,
// };

// const allContacts = useSelector(getAllContacts);
