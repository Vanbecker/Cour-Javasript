const myContainerTag = document.querySelector(".main-container")

let firstPart = `je me nomme`
const firstname = `Rémi`
const age = 30
const brotherAge = 40
let result1 = brotherAge % age
let result = `Bonjour,${firstPart} ${firstname} et j'ai ${age} ans`

const myArray = [`Paul`,`Pierre`, `Nathalie`, `Mathilde`,`Melissa`]


    ////////

    // const identity_1 = {
    //     firstname: "Pierre",
    //     lastname: "Durand",
    //     age: 58,
    //     size: 1.78,
    //     weight: 95,
    //     town: { name: "Paris", population: 2000000 }
    //   };
      
    //   const identity_2 = {
    //     firstname: "Rémi",
    //     lastname: "Le Gall",
    //     age: 69,
    //     size: 2.10,
    //     weight: 75,
    //     town: { name: "Bordeaux", population: 20000000000 }
    //   };
      


    //   let imc1 = identity_1.(weight / size) * * 2
    //   let imc2 = identity_2.(weight / size) * * 2


      
    //   if (imc1 > imc2) {

    //     bigImc= identity_1;
    //     smallImc= identity_2;

    //   } else {

    //     smallImc= identity_1;
    //     bigImc= identity_2;
    //   }
      
    //   myContainerTag.textContent = `C'est ${firstname.bigImc} qui a l'IMC la plus élevée.`


    //   IMC formule : weight / size * * 2

    /////////
    const identity_1 = {
        firstname: "Pierre",
        lastname: "Durand",
        age: 58,
        size: 1.78,
        weight: 95,
        town: { name: "Paris", population: 2000000 }
      };
      
      const identity_2 = {
        firstname: "Rémi",
        lastname: "Le Gall",
        age: 69,
        size: 2.10,
        weight: 75,
        town: { name: "Bordeaux", population: 20000000000 }
      };

     
      
      identity_1.imc = identity_1.weight / (identity_1.size ** 2)
      identity_2.imc = identity_2.weight / (identity_2.size ** 2)

      let bigImc, smallImc;
      
      
      
      if (imc1 > imc2) {
        bigImc = identity_1;
        smallImc = identity_2;
      } else {
        smallImc = identity_1;
        bigImc = identity_2;
      }
      
      myContainerTag.textContent = `C'est ${bigImc.firstname} qui a l'IMC le plus élevé : ${bigImc.imc}`
      

      
  /////////

// Création de phrase remplis de ${} qui corresponde au resultat 
// myContainerTag.textContent = `M. ${bigSize.lastname} est le plus grand. Il mesure ${bigSize.size - smallSize.size} cm de plus que M. ${smallSize.lastname}.`



// let myBoolean = brotherAge > age;

// if (myBoolean ) {

//     result = myBoolean
//  } else {
// result = `nul`

//     }

// mycontainerTag.textContent = result

//OU
// let result = firstPart + ` ` + firstname

// if(brotherAge == age){
//     result = `Mon frère a le meme age que moi : ${age} ans.`
   

// }

// if ((brotherAge % 2) == '0')  {

//     result = `pair`

//     } else {

    
//     result = `impair`
// }



//Raccourcie// option shift l = |
//Raccourcie// option shift fleche du bas = copie la ligne selectionné 