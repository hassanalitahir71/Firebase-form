import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { updateDoc, doc } from "firebase/firestore";
import Toast from "react-hot-toast";

function AddAndUpdate({ Open, onClose, contact, isUpdate }) {
  const addContact = async (contact) => {
    try {
      const contactsRef = collection(db, "contacts");
      await addDoc(contactsRef, contact);
      Toast.success("Contact added successfully");
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      Toast.success("Contact updated successfully");
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div>
      <Modal Open={Open} onClose={onClose} title="Add Contact">
        <Formik
          initialValues={
            isUpdate && contact
              ? { name: contact.name, email: contact.email }
              : { name: "", email: "" }
          }
          onSubmit={(values) => {
            if (isUpdate) {
              updateContact(values, contact.id);
            } else {
              addContact(values);
            }
            onClose();
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
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

export default AddAndUpdate;
