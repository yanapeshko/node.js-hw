const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log(contactsPath);

const updateContacts = async (contacts) =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

// TODO: задокументувати кожну функцію
const listContacts = async () => {
  const result = await fs.readFile(contactsPath);
  return JSON.parse(result);
};
const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);
  return result || null;
};

const removeContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return result;
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();

  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
