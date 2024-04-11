import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors.js";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  console.log("Filtered Contacts:", filteredContacts);

  // Перевірка, чи є filteredContacts масивом
  if (!Array.isArray(filteredContacts)) {
    return <div>Loading...</div>; // Або будь-яке інше повідомлення про завантаження або помилку
  }

  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
