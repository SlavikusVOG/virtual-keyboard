import Keyboard from './view/keyboard/keyboard';
import './styles/styles.scss';

const keyboard = new Keyboard().getKeyboard();
const body = document.getElementsByTagName('body')[0];
body.appendChild(keyboard);
