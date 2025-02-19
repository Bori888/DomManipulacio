import { diak1,diakokLista } from "./adat.js"
import { diakMegjelenit,diakokMegjelenit } from "./fuggvenyek.js"


let tartalomElem =document.getElementById("tartalom")


diakMegjelenit(diak1,tartalomElem)
diakokMegjelenit(diakokLista,tartalomElem)

