import './styles/styles.scss';
import Header from './view/header/header';
import Main from './view/main/main';
import Footer from './view/footer/footer';

const body = document.getElementsByTagName('body')[0];
const wrapper = body.appendChild(document.createElement('div'));
wrapper.classList.add('body__wrapper');
const header = new Header();
const headerElement = header.getHeaderElement();
wrapper.appendChild(headerElement);
const main = new Main();
const mainElement = main.getMainElement();
wrapper.appendChild(mainElement);
const footer = new Footer();
const footerElement = footer.getFooterElement();
wrapper.appendChild(footerElement);
