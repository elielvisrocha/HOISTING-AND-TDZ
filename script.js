'use strict';


// function calcAge(birthYear) {
//     const age = 2029 - birthYear;
//     console.log(firstName);
//     return age;
// }

// const firstName = 'Elvis';
// calcAge()

// function calcAge(birthYear) {
//     const age = 2029 - birthYear;

//     function printAge() {
//         let output = `${firstName} ,you are ${age}, born in ${birthYear}.`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             const firstName = "Marye";
//             const str = `Oh, you're a millenial, ${firstName}.`;
//             console.log(str);

//             function add(a, b) {
//                 return console.log(a + b)
//             }

//             const output = "NEW OUTPUT!"
//         }

//         console.log(output);
//         // add(2, 3);
//     }
//     printAge()

//     return age;
// }

// const firstName = 'Elvis';
// calcAge(1990)






// HOISTING


// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Eliélvis';
// let job = 'developer';
// const year = 2003;



// FUNCTIONS

// const show = function (message) {
//     return console.log(message);
// }

// show(addDecl(10, 10));

// show(addExpre(20, 20));

// show(addArrow(30, 30));

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpre = function (a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;


// EXAMPLES


// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted');
// }



// var x = 2;
// let y = 4;
// const z = 10;


// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);






// THE "THIS" KEYWORD"

// console.log(this);

// const plusNumber = function (a,b) {
//     console.log(a + b);
//     console.log(this);
// }

// plusNumber(10, 10);



// const plusNumber2 = (a, b) => {
//     console.log(a + b);
//     console.log(this);
// };

// plusNumber2(10, 10);





// const Elvis = {
//     year: 2003,
//     calAge() {
//         console.log(2023 - this.year)
//     }
// }


// Elvis.calAge();




// const Mary = {
//     year: 2000,
// };


// Mary.calAge = Elvis.calAge;

// Mary.calAge();







// REGULAR FUNCTIONS VS ARROW FUNCTIONS;




// const name = 'Mary';


// const Elvis = {
//     name: 'Elvis',
//     year: 1986,
//     calAge() {
//         console.log(2023 - this.year);

//         // const self = this;

//         // SOLUTION 1
//         // const isMillenial = function () {
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         // }
//         // // const isMillenial = function () {
//         // //     console.log(this.year >= 1981 && this.year <= 1996);
//         // // }.bind(this)

//         // isMillenial();


//         // SOLUTION 2
//         const isMillenial = () => {
//             console.log(this.year >= 1981 && this.year <= 1996);
//         }

//         isMillenial();
//     },

//     sayName: () => {
//         console.log(this);
//         console.log(`Hey ${this.name}`)
//     }
// }

// Elvis.calAge();

// // Elvis.sayName();





// ARGUMENTS KEYWORD

// const plusNumber = function (a,b) {
//     console.log(a + b);
//     console.log(arguments);
// }

// plusNumber(10, 10);



// const plusNumber2 = (a, b) => {
//     console.log(arguments);
//     return console.log(a + b);
// };

// plusNumber2(10, 10);








// PRIMITIVE vs OBJECTS (PRIMITIVE vs REFERENCE TYPES)


// let age = 30;

// const oldAge = age;

// age = 28;


// console.log(oldAge);
// console.log(age);



// const me = {
//     name: 'name',
// };

// const anotherMe = me;

// anotherMe["name"] = 'name2'

// console.log(me);
// console.log(anotherMe);



// PRIMITIVE VALUES

// [
//     NUMBER,
//     STRING,
//     BOOLEAN,
//     UNDEFINED,
//     NULL,
//     SYMBOL,
//     BIGINT
// ]



//     OBJECTS

// [
//     OBJECT LITERAL,
//     ARRAYS,
//     FUNCTIONS,
//     MANY MORE,
// ]




// PRIMITIVE vs OBJECTS (PRIMITIVE vs REFERENCE TYPES)




// let lastName = 'Williams';
// let oldLastName = lastName;

// lastName = 'Davis';

// console.log(lastName, ' | ', oldLastName);




// const mary = {
//     firstName: 'Mary',
//     lastName: 'Ysana',
//     age: 21
// };


// const newMary = mary;

// newMary['lastName'] = 'Tamashi';

// console.log(mary, newMary);


const mary2 = {
    firstName: 'Mary',
    lastName: 'Ysana',
    age: 21,
    family: ['Gray', 'Juvia']
};

// IMPORTANTTTTTTTTTTTTTTTTT!!!!!!!!!!!!!!!!!!!

const newMary = Object.assign({}, mary2);

// newMary['lastName'] = 'Tamashi';

newMary.family.push('Noxus');


console.log(mary2);
console.log(newMary);