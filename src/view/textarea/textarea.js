export default class Textarea {
  constructor() {
    this.textareaContainer = document.createElement('div');
    this.textarea = this.textareaContainer.appendChild(document.createElement('textarea'));
    this.textarea.classList.add('body__textarea', 'textarea');
  }

  getTextareaContainer() {
    return this.textareaContainer;
  }
}
