import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

export const Form = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    console.log({ [name]: value });
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number });

    setState({ ...state });

    reset();
  };

  const reset = () => {
    setState({
      name: '',
      number: '',
    });
  };

  const { name, number } = state;

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.form_label}>
          Name
          <input
            className={css.form_input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.form_label}>
          Number
          <input
            className={css.form_input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contacts
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
