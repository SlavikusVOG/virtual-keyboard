import Keyboard from './view/keyboard/keyboard';
import './styles/styles.scss';
import Header from './view/header/header';
import Textarea from './view/textarea/textarea';
import Footer from './view/footer/footer';

const body = document.getElementsByTagName('body')[0];
const header = new Header();
const headerElement = header.getHeaderElement();
body.appendChild(headerElement);
const textarea = new Textarea();
const textareaContainer= textarea.getTextareaContainer();
body.appendChild(textareaContainer);
const keyboard = new Keyboard();
const keyboardElement = keyboard.getKeyboardElement();
body.appendChild(keyboardElement);
const footer = new Footer();
const footerElement = footer.getFooterElement();
body.appendChild(footerElement);
