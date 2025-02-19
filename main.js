import { diak1,diakokLista } from "./adat.js"
import { diakMegjelenit,diakokMegjelenit } from "./fuggvenyek.js"


let tartalomElem =document.getElementById("tartalom")


diakMegjelenit(diak1,tartalomElem)
diakokMegjelenit(diakokLista,tartalomElem)

/* elem eleérése */

console.log(tartalomElem)
let diakElemek =document.getElementsByClassName("diak")
console.log(diakElemek);
console.log(diakElemek[2]);

let diakElemek2 =document.querySelector(".diak")
console.log(diakElemek2);

let diakElemek3 =document.querySelectorAll(".diak")
console.log(diakElemek3);
console.log(diakElemek3[0]);

let articleElem =document.querySelectorAll("article")
console.log(articleElem);
console.log(articleElem[0]);

let inputElem =document.querySelectorAll("#nev")
console.log(inputElem);
console.log(inputElem[0]);

diakElemek3[2].addEventListener("click",fnev)
function fnev(event) {
    console.log(event.target);
    console.log(diakElemek3[2]);
    let asideElem =document.querySelectorAll("aside")
    console.log(articleElem);
    articleElem[0].innerHTML+= diakElemek3[2].innerHTML
    
    
    
    
}


