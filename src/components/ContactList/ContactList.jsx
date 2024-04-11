import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors.js";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

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
