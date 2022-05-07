import constants from '../../const';

export default class Keyboard {
  constructor() {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
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

        const eng = newButton.appendChild(document.createElement('span'));
        eng.classList.add('eng');

        const caseDown = eng.appendChild(document.createElement('span'));
        caseDown.textContent = constants.LAYOUTS.eng.caseDown[rowIndex][buttonIndex];
        caseDown.classList.add('caseDown');

        const caseUp = eng.appendChild(document.createElement('span'));
        caseUp.textContent = constants.LAYOUTS.eng.caseUp[rowIndex][buttonIndex];
        caseUp.classList.add('caseUp', 'hidden');

        const caps = eng.appendChild(document.createElement('span'));
        caps.textContent = constants.LAYOUTS.eng.caps[rowIndex][buttonIndex];
        caps.classList.add('caps', 'hidden');

        const shiftCaps = eng.appendChild(document.createElement('span'));
        shiftCaps.textContent = constants.LAYOUTS.eng.shiftCaps[rowIndex][buttonIndex];
        shiftCaps.classList.add('shiftCaps', 'hidden');
      }
    }
  }

  getKeyboardElement() {
    return this.keyboard;
  }
}
