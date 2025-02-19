

export function diakMegjelenit(diak,tartalomElem) {
    tartalomElem.innerHTML+=`
            <div class="diak" id ="diak1">
                    <h2>Diák neve:${diak.nev}</h2>
                    <p>Osztály: ${diak.csoport}</p>
                    <p>Kor: ${diak.kor}</p>
                    <p>Átlag: ${diak.tAtlag}</p>
                    <p>Leirás: : ${diak.leiras}</p>
                    

            </div>
            `;
    
}
export function diakokMegjelenit(lista,tartalomElem) {
    for (let index = 0; index < lista.length; index++) {
        diakMegjelenit(lista[index],tartalomElem)
        
        
    }
    
    
}