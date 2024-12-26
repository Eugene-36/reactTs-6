import ContactForm from './ContactForm.tsx';
import SearchBox from './SearchBox.tsx';
import ContactList from './ContactList.tsx';

function App() {
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <section>
          <ContactForm />
        </section>
        <section>
          <SearchBox />
        </section>
        <section>
          <ContactList />
        </section>
      </div>
    </>
  );
}

export default App;
