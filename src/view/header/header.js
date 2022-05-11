export default class Header {
  constructor() {
    this.header = document.createElement('header');
    // this.logo = this.header.appendChild(document.createElement('div'));
    this.title = this.header.appendChild(document.createElement('h1'));
    this.title.textContent = 'Virtual keyboard';
    this.title.classList.add('title');
    // this.menu = this.header.appendChild(document.createElement('div'));
  }

  getHeaderElement() {
    return this.header;
  }
}
