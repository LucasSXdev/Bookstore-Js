const Database = require("./Database");
const Author = require("./Entities/Author");
const Book = require("./Entities/Book");
const Order = require("./Entities/Order");
const Posters = require("./Entities/Posters");
const User = require("./Entities/User");

module.exports = class App {
  static #database = new Database();

  createUser(name, email, password) {
    const user = new User(name, email, password);
    App.#database.saveUser(user);
  }

  getUsers() {
    return App.#database.find("users");
  }

  createAuthor(name, nationality, bio) {
    const author = new Author();
    App.#database.saveAuthor(author);
  }

  getAuthors() {
    return App.#database.find("authors");
  }

  createBook(
    title,
    sinopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock
  ) {
    const book = new Book(
      title,
      sinopsis,
      genre,
      pages,
      author,
      description,
      price,
      inStock
    );

    App.#database.saveBook(book);
  }

  addBook(bookName, quantity) {
    App.#database.addBooksToStock(bookName, quantity);
  }

  createPoster(name, description, heigth, width, price, inStock) {
    const poster = new Posters(
      name,
      description,
      heigth,
      width,
      price,
      inStock
    );

    App.#database.savePoster(poster);
  }

  addBook(posterName, quantity) {
    App.#database.addPostersToStock(posterName, quantity);
  }

  getBooks() {
    return App.#database.find("books");
  }

  createOrder(items, user) {
    const order = new Order(items, user);
    App.#database.saveOrder(order);
    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        App.#database.removeBooksFromStock(product.name, quantity);
      } else if (product instanceof Posters) {
        App.#database.removeBooksFromStock(product.name, quantity);
      }
    });
  }

  getOrders() {
    return App.#database.find("orders");
  }

  showDatabase() {
    App.#database.showStorage();
  }
};
