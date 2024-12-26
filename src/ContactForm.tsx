import { addContact } from './redux/contactsSlice';
import { useAppDispatch } from './redux/hooks';

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addContact({
        id: Date.now(),
        number: e.target.elements.number.value,
        name: e.target.elements.name.value,
      })
    );
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='input-wrapper'>
          <input
            required
            type='text'
            name='number'
            placeholder='Write your number'
          />
          <input
            required
            type='text'
            name='name'
            placeholder='Write your name'
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
