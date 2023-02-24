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
