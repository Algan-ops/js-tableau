// function multipl(a, b) {
//     return a * b;
// }
// const resultat = multipl(15, 3);
// console.log(`Le résultat de la multiplication est : ${resultat}`);


// exo 2 //

// function isEven(number) {
//     return number % 2 === 0;
// }

// console.log(isEven(4)); 
// console.log(isEven(7)); 


// exo 3 //

// function sumUpTo(n) {
//     return (n * (n + 1)) / 2;
// }

// console.log(`La somme des nombres de 1 à ${n} est : ${sumUpTo(n)}`);

// exo 4 //

// function multiply(a,b) {
//     let product = a * b;
//     return product 
// }

// console.log(multiply(2,3));


//-------------------- LES TABLEAUX --------------//

// const fruit1 = 'pomme'
// const fruit1 = 'poire'
// const fruit1 = 'fraise'

// const fruits = ['pomme','poire','fraise',2 false]

// const cpy =[...fruits]
// copy[0] = 'franboise'

// console.log(fruits[0])

// for (let fruit of fruits) {
//     console.log(fruit)
// }


//---------------- exo 1----------//

// function multiplierParDeux(tableau) {
//     return tableau.map(element => element * 2);
// }

// const tableauInitial = [1, 2, 3, 4, 5];
// const tableauMultiplie = multiplierParDeux(tableauInitial);

// console.log("Tableau initial :", tableauInitial);
// console.log("Nouveau tableau avec éléments multipliés par 2 :", tableauMultiplie);

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = arr.map(x => x * 2);

// console.log(newArr)

// exo 2 // 

// let fruits = ["apple","banana","cherry"];
// console.log(fruits[2]);

// exo 3 //

// let fruits = ["apple", "banana", "cherry"];
// fruits.forEach(fruit => console.log(fruit));

// exo 4 //
// function reverseArray(arr) {
// console.log('tableau :', arr);

// const reversed = arr.reverse();
// console.log('reversed:', reversed);
// }
// reverseArray(['one', 'two', 'three', 'quatre'])

// exo 5 //

// function countOccurrences(arr, value) {
//     return arr.reduce((compteur, element) => {
//         return element === value ? compteur + 1 : compteur;
//     }, 0);
// }
// const tableau = [1, 2, 3, 4, 2, 2, 5];
// const valeurRecherchee = 2;
// console.log(`La valeur ${valeurRecherchee} apparaît ${countOccurrences(tableau, valeurRecherchee)} fois dans le tableau.`);

//-------------------------- 2 eme version simple --------------//

// function countOccurrences(arr, value) {
//     let r = ["1, 2, 3, 1, 2, 3, 1, 1, 1"];
//     console.log((r.match(/1/g)).length);
// }
// countOccurrences()

// ou //

// function countOccurrences(arr, value) {
//     console.log()
// }
// countOccurrences(["1, 2, 3, 1, 2, 3, 1, 1, 1"])


// exo 6 //

// function mostFrequent(arr) {
//       let r = ["arr","value", "arr" ,"value", "arr", "value"];
//       console.log(r.indexOf(arr);
// }

// mostFrequent()

//------------------------ ou ----------------------// 

// function mostFrequent(arr) {
//     let occurrences = {};
//     let maxCount = 0;
//     let mostFrequentElement = null;

//     for (let element of arr) {
//         occurrences[element] = (occurrences[element] || 0) + 1;

//         if (occurrences[element] > maxCount) {
//             maxCount = occurrences[element];
//             mostFrequentElement = element;
//         }
//     }

//     return mostFrequentElement;
// }

// const tableau = [1, 2, 3, 2, 4, 2, 5, 3, 3, 3];
// console.log(`L'élément le plus fréquent est : ${mostFrequent(tableau)}`);


// // exo 7 //

// function reverseWords(sentence) {
//     .splreturn sentenceit(' ').reverse().join(' ');
// }
// let sentence = "I love programming";
// console.log(reverseWords(sentence));  

// // exo 8 //

// function filterEven(arr) {
//     return arr.filter(element => element % 2 === 0);
// }

// const tableau = [1, 2, 3, 4, 5, 6, 7, 8];
// const nombresPairs = filterEven(tableau);

// console.log(nombresPairs);  

// exo 9 //

// function mergeArrays(arr1, arr2) {
//     let resultat = [];

//     for (let i = 0; i < arr1.length; i++) {
//         resultat.push(arr1[i]);
//     }

 
//     for (let i = 0; i < arr2.length; i++) {
//         resultat.push(arr2[i]);
//     }

//     return resultat;
// }

// const tableau1 = [1, 2, 3];
// const tableau2 = [4, 5, 6];
// const fusion = mergeArrays(tableau1, tableau2);

// console.log(fusion); 


// exo 10 //

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// const tableau = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5];
// const tableauSansDoublons = removeDuplicates(tableau)


// console.log(tableauSansDoublons)

//--------- exo 11 ---------//

// ---------------le tableux et remi en ordre croissant----------//

// function mergeArrays(arr1, arr2) {
//     let resultat = [];

//     for (let i = 0; i < arr1.length; i++) {
//         resultat.push(arr1[i]);
//     }

 
//     for (let i = 0; i < arr2.length; i++) {
//         resultat.push(arr2[i]);
//     }

//     return resultat;
// }

// const tableau1 = [5, 1, 3];
// const tableau2 = [4, 2, 6];
// const fusion = mergeArrays(tableau1, tableau2);
// fusion.sort();
// console.log(fusion);

// ou //

// function isSorted(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }


// const tableau1 = [1, 2, 3, 4, 5];
// const tableau2 = [1, 3, 2, 4, 5];

// console.log(isSorted(tableau1));  
// console.log(isSorted(tableau2)); 

//------------exo 12----------- //

// function titleCase(cap) {
//     return cap
//       .split(' ')
//       .map(maj => maj.charAt(0).toUpperCase() + maj.slice(1))
//       .join(' ');
//   }

//   let chaine = "bonjour tout le monde c'est le marchant de sable";
//   let resultat = titleCase(chaine);
//   console.log(resultat); 


//---------------exo 13-------------- //

// function truncate(str, maxLength) {
//     if (str.length > maxLength) {
//         return str.slice(0, maxLength - 3) + "...";
//     }
//     return str;
// }

// const phrase = "JavaScript est bizar x)";
// console.log(truncate(phrase, 17));


//---------------FIN-------------- //



