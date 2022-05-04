export default class Header {
  constructor() {
    this.header = document.createElement('header');
    this.logo = this.header.appendChild('div');
    this.menu = this.header.appendChild('div');
  }

  getHeaderElement() {
    return this.header;
  }
}
