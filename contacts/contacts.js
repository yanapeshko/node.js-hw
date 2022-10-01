const path = require("path");
const fs = require("fs/promises");

const contactsPath = path.join(__dirname, "db", "contacts.json");

module.exports = contactsPath;

// TODO: задокументувати кожну функцію
const listContacts = async ({ action, filepath, data }) => {
  switch (action) {
    case "read":
      const text = await fs.readFile(filepath, "utf-8");
      console.log(text);
      // const result = await fs.readFile(filepath);
      // const text = result.toString();
      // console.log(text);
      break;
    case "add":
      await fs.appendFile(filepath, data);
      break;
    case "replace":
      await fs.writeFile(filepath, data);
      break;
    default:
      console.log("Unknown action");
  }
};

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

export default listContacts;
