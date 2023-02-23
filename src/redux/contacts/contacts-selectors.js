export const getAllContacts = store => store.contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }
  const filterNormalize = filter.toLowerCase();

  const filterList = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterNormalize);
  });
  return filterList;
};

// export const getFilteredBooks = ({ contacts, filter }) => {
//   if (!filter) {
//     return contacts;
//   }

//   const normalizedFilter = filter.toLowerCase();

//   const result = contacts.filter(({ title, author }) => {
//     return (
//       title.toLowerCase().includes(normalizedFilter) ||
//       author.toLowerCase().includes(normalizedFilter)
//     );
//   });

//   return result;
// };
