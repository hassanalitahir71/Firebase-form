import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

function AddAndUpdate({ Open, onClose, contact }) {
  const addContact = async (contact) => {
    try {
      const contactsRef = collection(db, "contacts");
      await addDoc(contactsRef, contact);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  return (
    <div>
      <Modal Open={Open} onClose={onClose} title="Add Contact">
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={(values) => {
            addContact(values);
            console.log(values);
          }}
        >
          <Form className="flex h-full w-full flex-col items-center gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name:</label>
              <Field
                name="name"
                placeholder="Name"
                className="border-Gray h-8 w-72 rounded border p-1"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email:</label>
              <Field
                name="email"
                placeholder="Email"
                className="border-Gray h-8 w-72 rounded border p-1"
              />
            </div>
            <button className="p-0.1 mt-0.5 mr-3 h-7 w-30 self-end rounded-md border bg-amber-400">
              Add Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

export default AddAndUpdate;
