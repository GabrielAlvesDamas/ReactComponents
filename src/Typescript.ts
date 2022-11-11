import { ChangeEvent } from "react";

let collapse: boolean = false;

function expandCollapse(){
    var menu = document.getElementById('menu');
    if (menu != null){
        if (collapse == false){
            menu.classList.remove('expand')
            menu.classList.remove('collapse')
            menu.classList.add('expand')
            collapse = true
        }else{
            menu.classList.remove('expand')
            menu.classList.remove('collapse')
            menu.classList.add('collapse')
            collapse = false
        }
    }
}





export default expandCollapse;



