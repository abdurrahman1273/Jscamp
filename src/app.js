
console.log("Merhaba kodlamaio")

let dolarBugun = 9.20

let dolarDun = 9.30
dolarDun = "9.20"

{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11
console.log(euroDun)

//array
let konutKredileri =["konut kredisi","Emlak konut kredisi","kamu kredileri"]

console.log("<ul>")
for(let i = 0;i<3;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")
