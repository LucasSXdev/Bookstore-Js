const Products = require("./Product");

module.exports = class Book extends Products {
  constructor(
    title,
    sinopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock = 0
  ) {
    super(`Livro: ${title}`, description, price, inStock);
    this.title = title;
    this.sinopsis = sinopsis;
    this.genre = genre;
    this.pages = pages;
    this.author = author;
  }
};
