// import { useSelector } from 'react-redux';
// import { BallTriangle } from 'react-loader-spinner';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList/';

export default function App() {
  return (
    <div>
      <h1>Phonebook (ASYNC REDUX RTKQuery)</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {/* {isLoading && <BallTriangle color="#ffaa00" height={80} width={80} />} */}
      <ContactList />
      {/* {errorMsg && <p>{errorMsg}</p>} */}
    </div>
  );
}
