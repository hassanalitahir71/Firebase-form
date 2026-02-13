import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { RiEditCircleLine } from "react-icons/ri";
import { TiUserDelete } from "react-icons/ti";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import hooks from "../assets/Hooks/hooks";
import AddAndUpdate from "./AddAndUpdate";
import Toast from "react-hot-toast";

function ContactSection({ contacts }) {
  const { Open, onOpen, onClose } = hooks();

  const [selectedContact, setSelectedContact] = useState(null);

  const handleUpdateClick = (contact) => {
    setSelectedContact(contact);
    onOpen();
  };

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      Toast.success("Contact deleted successfully");
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <>
      <div className="h-100 w-full overflow-y-auto rounded-lg">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="mb-2 flex h-14 w-full items-center justify-between gap-4 rounded-lg bg-white p-3 shadow-md"
          >
            <div className="flex items-center gap-3">
              <CgProfile className="text-3xl text-amber-400" />
              <div>
                <p className="text-1xl font-semibold text-black">
                  {contact.name}
                </p>
                <p className="text-sm text-gray-500">{contact.email}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <RiEditCircleLine
                onClick={() => handleUpdateClick(contact)}
                className="cursor-pointer text-3xl text-black"
              />
              <TiUserDelete
                onClick={() => deleteContact(contact.id)}
                className="text-Purple cursor-pointer text-3xl"
              />
            </div>
          </div>
        ))}
      </div>
      <AddAndUpdate
        isUpdate
        Open={Open}
        onClose={onClose}
        contact={selectedContact}
      />
    </>
  );
}

export default ContactSection;
