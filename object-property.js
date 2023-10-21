const students = [
    {id:21, name: "Rubel"},
    {id:31, name: "Akash"},
    {id:41, name: "Ratul"},
    {id:51, name: "Kamal"}
]
// for( let i = 0; i < students.length; i++){
//     const element = students[i];
//     const result = element;
//     console.log(result);
// }

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id > 31);
const biggerOne = students.find( s => s.id > 31);
console.log(biggerOne);


