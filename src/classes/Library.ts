import { Book } from './Books'

export class Library {
  private books: Book[] = []

  getBooks () {
    return this.books
  }

  generateId () {
    const ids = this.books.map(e => e.id)

    if (!ids.length) {
      ids.push(0)
    }

    return Math.max(...ids) + 1
  }

  addBook (book : Book) {
    this.books.push(book)
  }

  lendBook (id: number) {
    this.books = this.books.map(e => {
      if (e.id === id) {
        e.enabled = false
      }
      return e
    })
  }

  returnBook (id: number) {
    this.books = this.books.map(e => {
      if (e.id === id) {
        e.enabled = true
      }
      return e
    })
  }

  getEnabledBooks () {
    const enabledBooks = listBooks.books.filter(e => e.enabled === true)
    return enabledBooks
  }

  getDisabledBooks () {
    const disabledBooks = listBooks.books.filter(e => e.enabled === false)
    return disabledBooks
  }
}

const listBooks = new Library()

const book1 : Book = {
  id: listBooks.generateId(),
  title: 'libro1',
  description: 'description 1',
  autor: 'florcita',
  enabled: true
}
listBooks.addBook(book1)

const book2 : Book = {
  id: listBooks.generateId(),
  title: 'libro2',
  description: 'description 1',
  autor: 'florcita',
  enabled: true
}
listBooks.addBook(book2)

const book3 : Book = {
  id: listBooks.generateId(),
  title: 'libro2',
  description: 'description 1',
  autor: 'florcita',
  enabled: true
}

listBooks.addBook(book3)

// console.log(listBooks.getBooks())

listBooks.lendBook(3)
console.log('Libros prestados:', listBooks.getDisabledBooks())

console.log('Libros disponibles', listBooks.getEnabledBooks())
