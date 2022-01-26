import { useSelector } from 'react-redux';
import { getFilter } from 'redux/store';
import { useGetItemsQuery } from 'services/api';
import Contact from 'components/Contact';
import s from './ContactList.module.css';

export default function ContactList() {
  const filterValue = useSelector(getFilter);
  const { data } = useGetItemsQuery();
  const filteredContacts = data
    ? data.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase()),
      )
    : [];

  return (
    <ul className={s.contacts}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
