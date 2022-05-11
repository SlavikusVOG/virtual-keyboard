export default class Footer {
  constructor() {
    this.footer = document.createElement('footer');
    this.footerData = this.footer.appendChild(document.createElement('div'));
    this.footerData.classList.add('footer__footer-data');
    this.githubInfo = this.footerData.appendChild(document.createElement('a'));
    this.githubInfo.classList.add('footer__footer-data_github');
    this.githubInfo.setAttribute('href', 'https://github.com/SlavikusVOG/virtual-keyboard');
    this.githubInfo.textContent = 'Repository';
  }

  getFooterElement() {
    return this.footer;
  }
}
