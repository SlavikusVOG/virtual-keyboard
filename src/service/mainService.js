import constants from '../constants';

export default class MainService {
  constructor(keyboard, textarea) {
    this.keyboard = keyboard;
    this.textarea = textarea;
  }

  attachEventsToKeys() {
    const keysArray = this.keyboard.getKeyElementsArray();
    debugger;
    keysArray.forEach((key) => {
      switch (key.textContent) {
        case constants.SHIFT_KEY:
          break;
        case constants.ALT_KEY:
          break;
        case constants.CTRL_KEY:
          break;
        default:
          key.addEventListener('click', this.attachEvent);
      }
    });
  }

  attachEvent(event) {
    const textareaElement = this.textarea.getTextareaElement();
    debugger;
    textareaElement.dispatchEvent(new KeyboardEvent('keydown', { key: event.key }));
  }
}
