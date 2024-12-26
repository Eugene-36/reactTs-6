import Contact from './Contact.js';
import { useAppSelector } from './redux/hooks';
type ContactList = {
  id: number;
  name: string;
  number: string;
};
const ContactList = () => {
  const listOfContacts = useAppSelector((state) => state.contact.items);
  const searchValue = useAppSelector((state) => state.filters.status);
  const visibleTasks = listOfContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      {visibleTasks.map(({ id, name, number }: ContactList) => (
        <Contact key={id} name={name} number={number} contactId={id} />
      ))}
    </div>
  );
};

export default ContactList;
