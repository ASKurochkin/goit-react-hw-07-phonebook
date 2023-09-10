import { useState } from 'react';

import css from './FormPhone.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions';

export const FormPhone = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    const switchInput = name => {
      switch (name) {
        case 'name':
          setName(value.trim());
          break;
        case 'number':
          setNumber(value.trim());
          break;
        default:
          return;
      }
    };
    contacts.some(
      ({ name }) => name.toLowerCase() === value.toLowerCase().trim()
    )
      ? alert(` ${value} is already in contacts`)
      : switchInput(name);
  };

  const formSubmit = e => {
    e.preventDefault();
    dispatch(addContact({name,number}));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.formAddContact} onSubmit={formSubmit}>
      <div className={css.decorInput}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <input
          className={css.input}
          id="name"
          type="text"
          name="name"
          required
          onChange={handleChange}
          value={name}
        />
      </div>
      <div className={css.decorInput}>
        <label className={css.label} htmlFor="number">
          Phone number
        </label>
        <input
          className={css.input}
          id="number"
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
        />
      </div>
      <button className={css.btnAdd} type="submit" disabled={!name || !number}>
        Add contact
      </button>
    </form>
  );
};
