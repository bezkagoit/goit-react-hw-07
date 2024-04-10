import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "User name must be at least 2 characters!")
    .max(50, "User name must be less than 50 characters!")
    .required("Name is required!"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, {
      message: "Enter correct phone number: 111-11-11",
      excludeEmptyString: false,
    })
    .required("Phone number is required!"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData, formActions) => {
    const newContact = {
      ...formData,
      id: nanoid(),
    };

    dispatch(addContact(newContact));
    formActions.resetForm();
  };

  return (
    <Formik
      validationSchema={ContactSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <div className={css.labelForm}>
          <label>Name</label>
          <Field
            className={css.formField}
            placeholder="Alex Mihalich"
            type="text"
            name="name"
          />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className={css.labelForm}>
          <label>Number</label>
          <Field
            className={css.formField}
            placeholder="111-11-11"
            type="text"
            name="number"
          />
          <ErrorMessage name="number" component="div" />
        </div>
        <button className={css.buttonForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
