import { Contact } from './Contact'

export class DiaryContacts {
  private contacts : Contact[] = []

  getMyContacts () {
    return this.contacts
  }

  addContact (contact : Contact) {
    this.contacts.push(contact)
  }

  searchContact (name : string) {
    const searchResult = this.contacts.filter(e => e.name.includes(name))
    return searchResult
  }
}

const listContacts = new DiaryContacts()

const contact1 : Contact = {
  name: 'Flor',
  email: 'flor@gmail.com',
  contact: 3704847478
}

const contact2 : Contact = {
  name: 'Mario',
  email: 'flor@gmail.com',
  contact: 3704847478
}

const contact3 : Contact = {
  name: 'Maria',
  email: 'flor@gmail.com',
  contact: 3704847478
}
listContacts.addContact(contact1)
listContacts.addContact(contact2)
listContacts.addContact(contact3)

console.log(listContacts.getMyContacts())
console.log('Resultado de tu busqueda: ', listContacts.searchContact('Ma'))
