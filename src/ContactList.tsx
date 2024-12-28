import Contact from './Contact.js';
import { useAppSelector } from './redux/hooks';
type ContactListProps = {
  id: string;
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
      {visibleTasks?.map(({ id, name, number }: ContactListProps) => (
        <Contact key={id} name={name} number={number} contactId={id} />
      ))}
    </div>
  );
};

export default ContactList;
