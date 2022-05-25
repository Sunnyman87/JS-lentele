// // 1 uzduotis
// //kuriu kintamaji
// const linkas = document.querySelector('a');
// console.log(linkas);

// linkas.textContent = 'linkas i MDN';

// linkas.href = "https://getbootstrap.com/docs/5.1/content/images/";


// //2 uzduotis
// //sukurti elementa ir i ji ideti texta

// const textplace = document.querySelector('section');
// const text = document.createElement('p');
// textplace.id = 'vieta'

// text.textContent = 'We huope you will die';
// textplace.append(text);

// // 3 uzduotis
// // paimti masyva ir pakeisti stiliu

// const pMasyvas = document.querySelectorAll('p');

// for (let i = 0; i < pMasyvas.length; i++) {
//     pMasyvas[i].style.color = "red";
// }

// // 4uzduotis paimti reiksme is ivedimo lauko

// const inputValue = document.getElementById('myInput');
// console.log(inputValue);
// const myButton = document.querySelector('#mybutton');
// console.log(myButton);
// const place = document.getElementById('container');
// console.log(place)

// myButton.addEventListener('click', addValue)

// function addValue(){
//     console.log("labas")
//     const tempVar = document.createElement('p');
//     tempVar.innerText = inputValue.value;
//     console.log(inputValue.value)
//     place.appendChild(tempVar)
// }

// // 5uzduotis ideti elementus i html
// // const mygtukas = document.getElementById('spausk');
// // mygtukas.addEventListener('click', modifytext)

// // function modifytext(){
// //     const info = document.querySelector('#list');
// //     info.innerHTML +='<li>Informacija</li>'
// // }

// // 6uzduotis stulpeliai ir eilutes

// const inputReiksme = document.getElementById('row');
// console.log(inputReiksme);
// const inputReiksme1 = document.getElementById('column');
// console.log(inputReiksme1);
// const manoMyg = document.querySelector('rcbutton');
// console.log(manoMyg);
// const vieta1 = document.getElementById('stulpeliai');
// console.log(vieta1)

// manoMyg.addEventListener('click', addReiksme);

// function addReiksme(){
//     console.log("labas")
//     const tempLet = document.createElement('tr');
//     tempLet.innerText = inputReiksme.value;
//     console.log(inputReiksme.value)
//     vieta1.appendChild(tempLet)
    
// }
// function modifytext(){
//     const info = document.querySelector('#stulpeliai');
//     info.innerHTML +='<li>Informacija</li>'
// }
// // jei noriu istrinti table ar row

// deleteBtn.addEventListener('click', function(e){
//     e.preventDefault();
//     deleteItem(e.target.parentNode.parentNode);
// }, false);

// function deleteBtn(row){
//     console.log('f-ja delete');
//     tableBody.removechild(row);
// }
// if(node.parentNode){
//     //remove node from a tree,unless its not in the tree already
//     node.parentNode.removechild(node)
// }

document.getElementById('rsbutton').onclick = function(){
    const rows = document.getElementById('rows').value
    const cols = document.getElementById('cols').value

    sukurti = '<table class="table">' //sukurti taga JS'e ir jame sukurti funkcija
                                          // ,kad sukurtu visa lentele.
    
    function sukurtilentele(rows,cols){//funkcija (ciklas cikle)
        for(let i = 1; i <= rows; i++){
            sukurti = sukurti + '<tr>' 
            for(let i = 1; i <= cols; i++){
                sukurti = sukurti + '<td>' + '<p>Stulpelis</p>' + '</td>'
            }
            sukurti = sukurti + '</tr>'
        }
        sukurti = sukurti + '</table>' // sukurto tago pabaiga
        document.getElementById('container').innerHTML = sukurti    
   }
   sukurtilentele(rows,cols)
}
