import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectFilter } from "../../redux/filtersSlice.js";
import { selectContacts } from "../../redux/contactsSlice.js";

const ContactList = () => {
  // Отримання всього об'єкту contacts зі стану Redux
  const contacts = useSelector(selectContacts);

  // Отримання фільтру зі стану Redux
  const filterText = useSelector(selectFilter) ?? "";

  // Фільтрація контактів за ім'ям з урахуванням фільтру
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );

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
