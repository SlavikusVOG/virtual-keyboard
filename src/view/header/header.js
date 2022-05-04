export default class Header {
  constructor() {
    this.header = document.createElement('header');
    this.logo = this.header.appendChild(document.createElement('div'));
    this.menu = this.header.appendChild(document.createElement('div'));
  }

  getHeaderElement() {
    return this.header;
  }
}
