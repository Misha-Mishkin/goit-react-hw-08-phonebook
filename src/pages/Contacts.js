import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Box from '@mui/material/Box';

export default function Contacts() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        backgroundImage:
          'url(https://s1.1zoom.ru/big0/428/Apple_iPhone_Macbook_Laptops_Glasses_Telephone_519457_1280x853.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        pt: 8,
        pb: 30,
      }}
    >
      <Box
        sx={{
          ml: 100,
        }}
      >
        <div>
          <div>
            <h1>Add new contact</h1>
            <ContactForm />
          </div>
          <div>
            <h2>Find contact by name</h2>
            <Filter />
            {<ContactList />}
          </div>
        </div>
      </Box>
    </Box>
  );
}
