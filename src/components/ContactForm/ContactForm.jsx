import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from '../../redux/contactsAPI/contacts-API';
import { useState } from 'react';
import s from './ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact] = useCreateContactMutation();
  const { data } = useFetchContactsQuery();

  const handleInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;

      default:
    }
    return;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      data?.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      toast.error(`${name} is already in contact`, {
        theme: 'colored',
        autoClose: 4000,
        pauseOnHover: true,
        closeOnClick: true,
      });
    } else {
      addContact({ name, number });
      setName('');
      setNumber('');
    }
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span className={s.text}>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label}>
          <span className={s.text}>Number</span>
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
