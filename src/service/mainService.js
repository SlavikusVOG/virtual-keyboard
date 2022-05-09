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
    const backspaceEventHandler = () => {
      textareaElement.value = textareaElement.value.slice(0, -1);
    };

    const lShiftEventHandler = () => {
      keyboard.leftShiftKeyPressed = !keyboard.leftShiftKeyPressed;
      keyboard.updateState();
    };

    const rShiftEventHandler = () => {
      keyboard.rightShiftKeyPressed = !keyboard.rightShiftKeyPressed;
      keyboard.updateState();
    };

    const ctrlEventHandler = () => {
      keyboard.ctrlPress = !keyboard.ctrlPress;
      keyboard.updateState();
    };

    const altEventHandler = () => {
      keyboard.altPressed = !keyboard.altPressed;
      keyboard.updateState();
    };

    const keyEventHandler = (event) => {
      const keyboardState = keyboard.getKeyboardState();
      const elementTarget = event.target;
      const keyElement = elementTarget.classList.contains(`${keyboardState}`)
        ? elementTarget
        : elementTarget.querySelector(`.${keyboardState}`);
      console.log(elementTarget);
      console.log(keyElement);
      const elementKey = keyElement.textContent;
      textareaElement.focus();
      // debugger;
      // TODO solve problem with keyboardevent.
      const currentCursor = textareaElement.selectionStart;
      textareaElement.value = `${textareaElement.value.slice(0, textareaElement.selectionStart)}${elementKey}${textareaElement.value.slice(textareaElement.selectionStart)}`;
      textareaElement.selectionStart = currentCursor + 1;
      textareaElement.selectionEnd = currentCursor + 1;
      // textareaElement.dispatchEvent(new KeyboardEvent('keydown', { key: elementKey }));
      // textareaElement.dispatchEvent(new KeyboardEvent('keyup', { key: elementKey }));
    };
    keysArray.forEach((key) => {
      switch (key.textContent) {
        case constants.L_SHIFT_KEY:
          lShiftEventHandler();
          break;
        case constants.R_SHIFT_KEY:
          rShiftEventHandler();
          break;
        case constants.ALT_KEY:
          altEventHandler();
          break;
        case constants.CTRL_KEY:
          ctrlEventHandler();
          break;
        case constants.BACKSPACE_KEY:
          backspaceEventHandler();
          break;
        default:
          key.addEventListener('click', keyEventHandler);
      }
    });
  }
}
