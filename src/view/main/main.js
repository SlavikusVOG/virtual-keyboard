import MainService from '../../service/mainService';
import Keyboard from '../keyboard/keyboard';
import Textarea from '../textarea/textarea';

export default class Main {
  constructor() {
    this.main = document.createElement('main');
    this.main.classList.add('body__main');
    const textarea = new Textarea();
    const textareaContainer = textarea.getTextareaContainer();
    this.main.appendChild(textareaContainer);
    const keyboard = new Keyboard();
    const keyboardElement = keyboard.getKeyboardElement();
    this.main.appendChild(keyboardElement);
    const mainService = new MainService(keyboard, textarea);
    mainService.attachEventsToKeys();
    mainService.attachEventToWindow();
  }

  getMainElement() {
    return this.main;
  }
}
