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
    const description = this.main.appendChild(document.createElement('div'));
    description.textContent = 'Клавиатура создана в операционной системе Windows';
    description.classList.add('main__description');
    const switchLanguage = this.main.appendChild(document.createElement('div'));
    switchLanguage.textContent = 'Для переключения языка комбинация: левые alt + ctrl';
    switchLanguage.classList.add('main__switch-lang');
    const mainService = new MainService(keyboard, textarea);
    mainService.attachEventsToKeys();
    mainService.attachEventToWindow();
  }

  getMainElement() {
    return this.main;
  }
}
