const Nav = document.querySelector('nav');
const Input_title = document.querySelector('data-main-input-title');
const Display_time = document.querySelector('data-display-time');
const Save_btn = document.querySelector('data-save-btn');
const New_btn = document.querySelector('data-new-btn');
const Delete_btn = document.querySelector('data-delete-btn');
const Textarea = document.querySelector('data-textarea');
class NewButton {
    constructor(text, title) {
        this.Id = Date.now().toString();
        this.text = text;
        this.title = title;
    }
    getId() {
        return this.Id;
    }
    createButton() {
        const Button = document.createElement('button');
        Button.setAttribute('id', this.Id);
        Button.setAttribute('class', 'nav-btn');
        return Button;
    }
}
Save_btn.addEventListener('click', () => void {});
export {};
