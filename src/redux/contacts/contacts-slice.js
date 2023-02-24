import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});

console.log(contactsSlice);

// const booksSlice = createSlice({
//   name: 'books',
//   initialState: [],
//   reducers: {
//     addBook: {
//       reducer: (state, { payload }) => {
//         state.push(payload);
//       },
//       prepare: data => {
//         return {
//           payload: {
//             id: nanoid(),
//             ...data,
//           },
//         };
//       },
//     },
//     deleteBook: (state, { payload }) =>
//       state.filter(({ id }) => id !== payload),
//   },
// });

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

// ______________________________________
//   reduser: (state, { payload }) => {
//     return [...state, payload];
//   },
//   prepare: data => {
//     return {
//       payload: {
//         id: nanoid(),
//         ...data,
//       },
//     };
//   },
//   addContact: {
//   },
