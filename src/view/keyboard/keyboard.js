import constants from '../../constants';

export default class Keyboard {
  constructor() {
    this.leftShiftKeyPressed = false;
    this.rightShiftKeyPressed = false;
    this.capsLockPressed = false;
    this.altPressed = false;
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    this.keyboardState = constants.KEYBOARD_STATE.caseDown;
    this.keyElementsArray = [];
    for (let rowIndex = 0; rowIndex < constants.LAYOUTS.eng.caseDown.length; rowIndex += 1) {
      const row = this.keyboard.appendChild(document.createElement('div'));
      row.classList.add('keyboard__row');
      for (
        let buttonIndex = 0;
        buttonIndex < constants.LAYOUTS.eng.caseDown[rowIndex].length;
        buttonIndex += 1
      ) {
        const newButton = row.appendChild(document.createElement('div'));
        newButton.classList.add('keyboard__key', 'key');
        this.keyElementsArray.push(newButton);

        const layoutsKeys = Object.keys(constants.LAYOUTS);
        layoutsKeys.forEach((lang, langIndex) => {
          const langSpan = newButton.appendChild(document.createElement('span'));
          langSpan.classList.add(lang);
          if (langIndex > 0) {
            langSpan.classList.add('hidden');
          }

          const caseDown = langSpan.appendChild(document.createElement('span'));
          caseDown.textContent = constants.LAYOUTS[lang].caseDown[rowIndex][buttonIndex];
          caseDown.classList.add('caseDown');

          const caseUp = langSpan.appendChild(document.createElement('span'));
          caseUp.textContent = constants.LAYOUTS[lang].caseUp[rowIndex][buttonIndex];
          caseUp.classList.add('caseUp', 'hidden');

          const caps = langSpan.appendChild(document.createElement('span'));
          caps.textContent = constants.LAYOUTS[lang].caps[rowIndex][buttonIndex];
          caps.classList.add('caps', 'hidden');

          const shiftCaps = langSpan.appendChild(document.createElement('span'));
          shiftCaps.textContent = constants.LAYOUTS[lang].shiftCaps[rowIndex][buttonIndex];
          shiftCaps.classList.add('shiftCaps', 'hidden');
        });
      }
    }
  }

  getKeyboardElement() {
    return this.keyboard;
  }

  getKeyElementsArray() {
    return this.keyElementsArray;
  }

  getKeyboardState() {
    return this.keyboardState;
  }

  setKeyboardState(state) {
    this.keyboardState = state;
  }

  updateState() {
    const shiftPressed = this.leftShiftKeyPressed || this.rightShiftKeyPressed;
    if (!shiftPressed && !this.capsLockPressed) {
      this.setKeyboardState(constants.KEYBOARD_STATE.caseDown);
    }
    if (shiftPressed && !this.capsLockPressed) {
      this.setKeyboardState(constants.KEYBOARD_STATE.caseUp);
    }
    if (!shiftPressed && this.capsLockPressed) {
      this.setKeyboardState(constants.KEYBOARD_STATE.caps);
    }
    if (shiftPressed && this.capsLockPressed) {
      this.setKeyboardState(constants.KEYBOARD_STATE.shiftCaps);
    }
  }
}
