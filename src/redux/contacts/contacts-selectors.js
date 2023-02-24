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
