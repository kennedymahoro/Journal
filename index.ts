const Nav:HTMLElement = document.querySelector('nav') as HTMLElement;
const Input_title:HTMLInputElement = document.querySelector('data-main-input-title') as HTMLInputElement;
const Display_time:HTMLHeadElement = document.querySelector('data-display-time') as HTMLHeadElement;
const Save_btn:HTMLButtonElement = document.querySelector('data-save-btn') as HTMLButtonElement;
const New_btn:HTMLButtonElement = document.querySelector('data-new-btn') as HTMLButtonElement;
const Delete_btn:HTMLButtonElement = document.querySelector('data-delete-btn') as HTMLButtonElement;
const Textarea:HTMLTextAreaElement = document.querySelector('data-textarea') as HTMLTextAreaElement;

class NewButton{
    Id:string;
    text:string;
    title:string;
    constructor(text:string,title:string){
        this.Id = Date.now().toString();
        this.text = text;
        this.title = title;
    }
    getId(){
        return this.Id;
    }
    createButton(){
        const Button:HTMLButtonElement = document.createElement('button')
        Button.setAttribute('id',this.Id)
        Button.setAttribute('class','nav-btn')
        return Button;
    }
}

Save_btn.addEventListener('click', ()=>void{

})