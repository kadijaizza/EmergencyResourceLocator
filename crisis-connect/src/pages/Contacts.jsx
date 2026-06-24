import { useState, useEffect } from "react";

function Contacts() {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [contacts, setContacts] = useState([]);

useEffect(() => {
const savedContacts =
JSON.parse(localStorage.getItem("contacts")) || [];


setContacts(savedContacts);


}, []);

const addContact = () => {
if (!name || !phone) return;


const newContact = {
  id: Date.now(),
  name,
  phone,
};

const updatedContacts = [...contacts, newContact];

setContacts(updatedContacts);

localStorage.setItem(
  "contacts",
  JSON.stringify(updatedContacts)
);

setName("");
setPhone("");


};

const deleteContact = (id) => {
const updatedContacts = contacts.filter(
(contact) => contact.id !== id
);


setContacts(updatedContacts);

localStorage.setItem(
  "contacts",
  JSON.stringify(updatedContacts)
);


};

return ( <div className="min-h-screen bg-[#F8D7DD] p-4"> <div className="max-w-md mx-auto">

```
    <h1 className="text-3xl font-bold text-center mb-6">
      Emergency Contacts
    </h1>

    <div className="bg-white rounded-3xl p-5 shadow-sm">

      <input
        type="text"
        placeholder="Contact Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 rounded-xl mb-3"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border p-3 rounded-xl mb-3"
      />

      <button
        onClick={addContact}
        className="
          w-full
          bg-[#E84A67]
          text-white
          py-3
          rounded-xl
          font-semibold
        "
      >
        Add Contact
      </button>

    </div>

    <div className="mt-6 space-y-4">

      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="
            bg-white
            rounded-3xl
            p-4
            shadow-sm
            flex
            justify-between
            items-center
          "
        >
          <div>
            <h3 className="font-bold">
              {contact.name}
            </h3>

            <p className="text-gray-500">
              {contact.phone}
            </p>
          </div>

          <div className="flex gap-2">

            <a
              href={`tel:${contact.phone}`}
              className="
                bg-green-500
                text-white
                px-3
                py-2
                rounded-xl
              "
            >
              Call
            </a>

            <button
              onClick={() =>
                deleteContact(contact.id)
              }
              className="
                bg-red-500
                text-white
                px-3
                py-2
                rounded-xl
              "
            >
              Delete
            </button>

          </div>
        </div>
      ))}

    </div>

  </div>
</div>


);
}

export default Contacts;
