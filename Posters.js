module.exports = class Posters {
  constructor(name, description, heigth, width, price, inStock = 0) {
    super(name, description, price, inStock);
    this.heigth = heigth;
    this.width = width;
  }
};
