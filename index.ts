const Nav:HTMLElement = document.querySelector('nav') as HTMLElement;
const Input_title:HTMLInputElement = document.querySelector('data-main-input-title') as HTMLInputElement;
const Display_time:HTMLHeadElement = document.querySelector('data-display-time') as HTMLHeadElement;
const Save_btn:HTMLButtonElement = document.querySelector('data-save-btn') as HTMLButtonElement;
const New_btn:HTMLButtonElement = document.querySelector('data-new-btn') as HTMLButtonElement;
const Delete_btn:HTMLButtonElement = document.querySelector('data-delete-btn') as HTMLButtonElement;
const Textarea:HTMLTextAreaElement = document.querySelector('data-textarea') as HTMLTextAreaElement;

class NewBtn{
    this.date:string
    constructor(title:string,date:string,text:string){

    }
    getID(){
        return this.date;
    }
}

Save_btn.addEventListener('click', ()=>void{

})