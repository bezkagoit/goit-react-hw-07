import React from "react";
import { ImPhone } from "react-icons/im";
import { ImUser } from "react-icons/im";
import css from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch(); // Отримуємо функцію dispatch з Redux

  const handleDelete = () => {
    dispatch(deleteContact(id)); // Викликаємо Redux action deleteContact з переданим id контакту
  };
  return (
    <li className={css.contactItem}>
      <div>
        <span className={css.contactName}>
          <ImUser />
          {name}
        </span>
        <span className={css.contactNumber}>
          <ImPhone />
          {number}
        </span>
      </div>
      <button
        className={css.contactDeleteBtn}
        onClick={handleDelete}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
