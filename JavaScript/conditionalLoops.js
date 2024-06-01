// const person ={        // person is a object 
//     name : "ajay",
//     age : 18,
//     gender : "male",
// }

// //  For in
// for(const  key in person)
// {
//       console.log(key);
// }
// for(const  a in person)
// {
//       console.log(person[a]);
// }

// // For off
// const arr = [1,2,3,4,5];
// for(let val of arr)
// {
//     console.log(val);
// }


function f1(a, b) {
    const op = '-';


    switch (op) {
        case "+":
            {
                console.log(a + b);
                // break;
            }
            break;
        case "-":
            {
                console.log(a - b);

            } break;
        case "*":
            {
                console.log(a * b);

            } break;
        case "%":
            {
                console.log(a % b);

            } break;

        case "/":
            {
                console.log(a / b);

            } break;

        default: console.log("check  for correct operator")
    }
}

f1(10, 20);

