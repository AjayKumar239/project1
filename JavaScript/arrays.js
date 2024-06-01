const arr1 =[];
const fruits = ["apple","mango","banana"];
// console.log(fruits);


const fruits1 = new Array("pineapple","mangos","banana");
//console.log(fruits1);

fruits.push("graphs");
//console.log(fruits);
//fruits.pop();

//console.log(fruits.pop());
// console.log(fruits.length);
// console.log(fruits.toString());
// console.log(fruits.join("--"));

// console.log(fruits.at(1))
// console.log(fruits.concat(fruits1));
//console.log(fruits.slice(1,3))
console.log(fruits.indexOf("banana"));
console.log(fruits.includes("tamlldl"));
console.log(fruits.sort());
console.log(fruits.reverse());

let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 1, "Lemon", "Kiwi"); // Removes "Apple" and adds "Lemon" and "Kiwi" at index 2
console.log(fruits3); // Output: ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]


const num = [12,4,5,34,65];
let first = num.find(myfun);
console.log(first);

function myfun(value,index,array)
{
    return value > 18;
}
