import constants from '../constants';

export default class MainService {
  constructor(keyboard, textarea) {
    this.keyboard = keyboard;
    this.textarea = textarea;

    const textareaElement = this.textarea.getTextareaElement();
    this.backspaceEventHandler = () => {
      textareaElement.focus();
      const currentCursor = textareaElement.selectionStart;
      textareaElement.value = `${textareaElement.value.slice(0, currentCursor - 1)}${textareaElement.value.slice(currentCursor)}`;
      textareaElement.selectionEnd = currentCursor - 1;
      textareaElement.selectionStart = currentCursor - 1;
    };

    this.lShiftEventHandler = (event) => {
      this.keyboard.leftShiftKeyPressed = !this.keyboard.leftShiftKeyPressed;
      this.keyboard.updateState();
      this.keyboard.updateKeyboardElements();
      // const keyboardState = this.keyboard.getKeyboardState();
      const elementTarget = event.currentTarget;
      elementTarget.classList.toggle('active');
      this.keyboard.updateState();
    };

    this.rShiftEventHandler = (event) => {
      this.keyboard.rightShiftKeyPressed = !this.keyboard.rightShiftKeyPressed;
      this.keyboard.updateState();
      this.keyboard.updateKeyboardElements();
      // const keyboardState = this.keyboard.getKeyboardState();
      const elementTarget = event.currentTarget;
      elementTarget.classList.toggle('active');
      this.keyboard.updateState();
    };

    this.capsLockHandler = (event) => {
      this.keyboard.capsLockPressed = !this.keyboard.capsLockPressed;
      this.keyboard.updateState();
      this.keyboard.updateKeyboardElements();
      // const keyboardState = this.keyboard.getKeyboardState();
      const elementTarget = event.currentTarget;
      elementTarget.classList.toggle('active');
      this.keyboard.updateState();
    };

    this.lCtrlEventHandler = (event) => {
      this.keyboard.ctrlPress = !this.keyboard.leftCtrlPress;
      const elementTarget = event.currentTarget;
      elementTarget.classList.toggle('active');
      if (this.keyboard.leftAltPressed || this.keyboard.rightAltPressed) {
        this.keyboard.switchLanguage();
        this.keyboard.updateKeyboardElements();
        elementTarget.classList.remove('active');
        const leftAltElement = document.querySelector(`.keyboard__key[data-key=${constants.L_ALT_KEY}]`);
        leftAltElement.classList.remove('active');
        const rightAltElement = document.querySelector(`.keyboard__key[data-key=${constants.R_ALT_KEY}]`);
        rightAltElement.classList.remove('active');
        this.keyboard.leftAltPressed = false;
        this.keyboard.rightAltElement = false;
        this.keyboard.leftCtrlPressed = false;
      }
      this.keyboard.updateState();
    };

    this.rCtrlEventHandler = (event) => {
      this.keyboard.ctrlPress = !this.keyboard.rightCtrlPress;
      const elementTarget = event.currentTarget;
      elementTarget.classList.toggle('active');
      this.keyboard.updateState();
    };

    this.lAltEventHandler = (event) => {
      this.keyboard.leftAltPressed = !this.keyboard.leftAltPressed;
      const elementTarget = event.currentTarget;
      elementTarget.classList.toggle('active');
      this.keyboard.updateState();
    };

    this.rAltEventHandler = (event) => {
      this.keyboard.rightAltPressed = !this.keyboard.rightAltPressed;
      const elementTarget = event.currentTarget;
      elementTarget.classList.toggle('active');
      this.keyboard.updateState();
    };

    this.keyEventHandler = (event) => {
      const keyboardState = this.keyboard.getKeyboardState();
      const elementTarget = event.currentTarget;
      elementTarget.classList.add('active');
      setTimeout((active) => { elementTarget.classList.remove(active); }, 100, 'active');
      // elementTarget.classList.remove('active');
      const keyElement = elementTarget.classList.contains(`${keyboardState}`)
        ? elementTarget
        : elementTarget.querySelector(`.${this.keyboard.keyboardLang} > .${keyboardState}`);
      console.log(elementTarget);
      console.log(keyElement);
      const elementKey = keyElement.textContent;
      textareaElement.focus();
      // debugger;
      const currentCursor = textareaElement.selectionStart;
      textareaElement.value = `${textareaElement.value.slice(0, textareaElement.selectionStart)}${elementKey}${textareaElement.value.slice(textareaElement.selectionStart)}`;
      textareaElement.selectionStart = currentCursor + 1;
      textareaElement.selectionEnd = currentCursor + 1;
    };

    this.windowKeyDownEventHandler = (event) => {
      console.log(event.key);
      console.log(event.code);
      const elementKey = document.querySelector(`.keyboard__key[data-key=${event.code}]`);
      elementKey.dispatchEvent(new Event('click'));
    };
  }

  attachEventsToKeys() {
    const keysArray = this.keyboard.getKeyElementsArray();
    keysArray.forEach((key) => {
      switch (key.getAttribute('data-key')) {
        case constants.L_SHIFT_KEY:
          key.addEventListener('click', this.lShiftEventHandler);
          break;
        case constants.R_SHIFT_KEY:
          key.addEventListener('click', this.rShiftEventHandler);
          break;
        case constants.CAPS_LOCK_KEY:
          key.addEventListener('click', this.capsLockHandler);
          break;
        case constants.L_ALT_KEY:
          key.addEventListener('click', this.lAltEventHandler);
          break;
        case constants.R_ALT_KEY:
          key.addEventListener('click', this.rAltEventHandler);
          break;
        case constants.R_CTRL_KEY:
          key.addEventListener('click', this.rCtrlEventHandler);
          break;
        case constants.L_CTRL_KEY:
          key.addEventListener('click', this.lCtrlEventHandler);
          break;
        case constants.BACKSPACE_KEY:
          key.addEventListener('click', this.backspaceEventHandler);
          break;
        // TODO: attach events to arrows, tab, del(optional)
        default:
          key.addEventListener('click', this.keyEventHandler);
      }
    });
  }

  attachEventToWindow() {
    document.addEventListener('keydown', this.windowKeyDownEventHandler);
  }
}
