export default class Footer {
  constructor() {
    this.footer = document.createElement('footer');
    this.copyright = this.footer.appendChild(document.createElement('div'));
    this.copyright.classList.add('copyright');
    this.copyright.textContent = '© 2022';
  }

  getFooterElement() {
    return this.footer;
  }
}
