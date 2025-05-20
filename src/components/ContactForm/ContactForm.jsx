import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContact({ id: uuidv4(), name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className={styles.input}
      />
      <input
        type="tel"
        name="number"
        placeholder="Phone number"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;