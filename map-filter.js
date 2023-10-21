const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for( let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(element){
//     return element * element;
// }

// // const square = element * element;
// // square = x => x * x;
// const result = numbers.map(x => x * x);

// // const result = numbers.map(function(element){
// //     return element * element;
// // });

// console.log(result);

const bigger = numbers.filter(x => x < 3);
console.log(bigger);