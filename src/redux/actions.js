import { nanoid } from '@reduxjs/toolkit';

export const delAll = () => ({ type: 'delAll' });

export const deleteContact = contactDel => ({
  type: 'deleteContact',
  payload: contactDel,
});

export const addContact = ({ name, number }) => ({
  type: 'addContact',
  payload: { name, number, id: nanoid() },
});

export const changeFilter = value => ({
  type: 'changeFilter',
  payload: value.toLowerCase().trim(),
});
