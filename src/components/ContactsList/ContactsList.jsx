import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactsList = ({ handleDelete, items }) => {
  const elements = items.map(({ id, name, number }) => (
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

  return (
    <div>
      <ul className={css[`contact-list`]}>{elements}</ul>
    </div>
  );
};

ContactsList.defaultProps = {
  items: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};

// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactsList.module.css';

// import { useSelector } from 'react-redux';

// export const ContactsList = ({ handleDelete }) => {
//   const contacts = useSelector(store => {
//     const filterNormalize = store.filter.toLowerCase();
//     const myContactsList = store.contacts.filter(contact => {
//       return contact.name.toLowerCase().includes(filterNormalize);
//     });
//     return myContactsList;
//   });
//   const elements = contacts.map(contact => (
//     <li key={contact.id} className={css.contact}>
//       {contact.name}: {contact.number}
//       <button
//         className={css.button}
//         id={contact.id}
//         type="button"
//         onClick={handleDelete}
//       >
//         Delete
//       </button>
//     </li>
//   ));
//   return (
//     <div>
//       <ul className={css[`contact-list`]}>
//         {elements}
//         {/* {contacts.map(contact => (
//           <li key={contact.id} className={css.contact}>
//             {contact.name}: {contact.number}
//             <button
//               className={css.button}
//               id={contact.id}
//               type="button"
//               onClick={handleDelete}
//             >
//               Delete
//             </button>
//           </li>
//         ))} */}
//       </ul>
//     </div>
//   );
// };
