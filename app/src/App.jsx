import React, { useEffect } from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { collection } from "firebase/firestore";
import { db } from "./config/firebase";
import { getDocs } from "firebase/firestore";
import ContactSection from "./components/ContactSection";
import Modal from "./components/Modal";
import AddAndUpdate from "./components/AddAndUpdate";
import hooks from "./assets/Hooks/hooks";

import "./App.css";
function App() {
  const [contacts, setContacts] = useState([]);
  const { Open, onOpen, onClose } = hooks();
  

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactSRef = collection(db, "contacts");
        const snapshot = await getDocs(contactSRef);
        const contactsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactsData);
        console.log(contactsData);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <>
      <div className="bg-Gray flex h-120 w-92 flex-col items-center rounded-2xl p-2">
        <NavBar />
        <div className="flex w-full items-center gap-1 py-1">
          <div className="mt- align-center relative flex w-80 justify-center rounded-lg">
            <IoSearchSharp className="text-White absolute top-1/2 left-1 -translate-y-1/2 text-3xl" />
            <input
              type="text"
              placeholder="Search contacts..."
              className="text-White h-10 w-full rounded-lg border border-white p-2 pl-9 focus:outline-none"
            />
          </div>
          <IoMdAddCircle
            onClick={onOpen}
            className="cursor-pointer text-5xl text-white"
          />
        </div>
        <ContactSection contacts={contacts} />
      </div>

      <AddAndUpdate Open={Open} onClose={onClose} />
    </>
  );
}

export default App;
