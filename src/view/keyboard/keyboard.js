import constants from '../../const';

export default class Keyboard {
  constructor() {
    this.keyboard = document.createElement('div');
    for (let rowIndex = 0; rowIndex < constants.EN_US_LAYOUT.length; rowIndex++) {
      const row = this.keyboard.appendChild(document.createElement('div'));
      for(let buttonIndex = 0; buttonIndex < constants.EN_US_LAYOUT[rowIndex].length; buttonIndex++) {
        const newButton = row.appendChild(document.createElement('div'));
        const eng = newButton.appendChild(document.createElement('span'));
        const caseDown = eng
      }
    }
  }
}
