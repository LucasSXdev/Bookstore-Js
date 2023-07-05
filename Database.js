module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  find(key) {
    return this.#storage[key];
  }

  saveAuthor(author) {
    this.#storage.authors.push(author);
  }

  findBookByName(book) {
    return this.#storage.books.find((b) => b.name === book.name);
  }

  saveBook(book) {
    const bookExists = this.findBookByName(book.name);
    if (!bookExists) {
      this.#storage.books.push(book);
    }
  }

  addBooksToStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.addToStock[quantity];
  }

  removeBooksFromStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.this.removeStock(quantity);
  }

  findPosterByName(posterName) {
    return this.#storage.books.find((p) => p.name === posterName);
  }

  savePoster(poster) {
    const posterExists = this.findPosterByName(posterName);
    if (!posterExists) {
      this.#storage.posters.push(poster);
    }
  }

  addPostersToStock(posterName, quantity) {
    const posoter = this.findPosterByName(posterName);
    poster?.addToStock[quantity];
  }

  removePosterFromStock(posterName, quantity) {
    const poster = this.findBookByName(posterName);
    poster?.this.removeStock(quantity);
  }

  saveUser(user) {
    const userExists = this.#storage.users.find((u) => u.email === users.email);
    if (!userExists) {
      this.#storage.users.push(user);
    }
  }

  saveOrder(order) {
    this.#storage.orders.push(order);
  }

  showStorage() {
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.orders);
    console.table(this.#storage.users);
    console.table(this.#storage.orders.map((order) => order.data));
  }
};
