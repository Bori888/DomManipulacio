console.log("Szép napunk van!")

let oldalElem = document.getElementById("oldal")
console.log(oldalElem)

oldalElem.innerHTML="<h2>Hurrá JS</h2>"
let inputElem =document.getElementById("nev")
let udvozolElem =document.getElementById("udvozol")

let nev =inputElem.value
udvozolElem.addEventListener("click",fnev)
function fnev() {
    nev =inputElem.value
    oldalElem.innerHTML+=`<p>Szia ${nev}</p>`
    
}

oldalElem.innerHTML+=`<p>Szia ${nev}</p>`

//*Diak adatok ki irasa*/
/** sajat megoldés
let diakNev =diak1.nev
let diakKor =diak1.kor
let diakCsoport =diak1.csoport
let diakTAtlag =diak1.tAtlag
let diakNeveElem =document.getElementById("diak")
let diakKorElem =document.getElementById("diak")
diakNeveElem.innerHTML+=`<h2>Diák neve: ${diakNev}<\h2>`
diakKorElem.innerHTML+=`<p>Diák kora: ${kor}<\p>`
*/

/*Tanári */