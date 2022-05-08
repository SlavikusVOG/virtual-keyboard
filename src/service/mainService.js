import constants from '../constants';

export default class MainService {
  constructor(keyboard, textarea) {
    this.keyboard = keyboard;
    this.textarea = textarea;
  }

  attachEventsToKeys() {
    const keysArray = this.keyboard.getKeyElementsArray();
    const textareaElement = this.textarea.getTextareaElement();
    const { keyboard } = this;
    const attachEvent = (event) => {
      const keyboardState = keyboard.getKeyboardState();
      const elementTarget = event.target;
      const keyElement = elementTarget.querySelector(`.${keyboardState}`);
      console.log(elementTarget);
      console.log(keyElement);
      // const elementKey = event.target.querySelector(`.${keyboardState}`).textContent;
      const elementKey = keyElement.textContent;
      textareaElement.focus();
      // TODO solve problem with keyboardevent.
      textareaElement.value += elementKey;
      // textareaElement.dispatchEvent(new KeyboardEvent('keydown', { key: elementKey }));
      // textareaElement.dispatchEvent(new KeyboardEvent('keyup', { key: elementKey }));
    };
    keysArray.forEach((key) => {
      switch (key.textContent) {
        case constants.SHIFT_KEY:
          if (this.keyboard.leftShiftKeyPressed)
          break;
        case constants.ALT_KEY:
          break;
        case constants.CTRL_KEY:
          break;
        default:
          key.addEventListener('click', attachEvent);
      }
    });
  }
}
