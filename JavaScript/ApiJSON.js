// async function GetUserdata()
// {
//     const Response = await fetch("https://jsonplaceholder.tryicode.com/users",{
//          method : "GET"
//         });
//         const jsonres = await Response.json();
//         console.log(jsonres);
//     }
//     GetUserdata();

// async function GetUserdata()
// {
//     const Response = await fetch("https://jsonplaceholder.tryicode.com/todos")

//          // const jsonres = await Response.json();
//         console.log(Response);
//     }
//     GetUserdata();
   
//    t\To  fetch the UserData

// async function GetUserdata(){
//     const Response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const json = await Response.json();
//     console.log(json);
// }


//  GetUserdata();

//  fetch(URL,OBJECT {  ...  })

// async function GetUserdata(){
//     const Response = await fetch("https://jsonplaceholder.typicode.com/users/7",{
//         method:"GET"
//     });
//     const jsonres = await Response.json();
//     console.log(jsonres);
// }
// GetUserdata();

//            ** POST METHOD

// async function createUserdata()
// {
//     const  user ={
//         username : "user11",
//         // username : "user12"
       
//     }
//     const Response = await fetch("https://jsonplaceholder.typicode.com/users",{
//         method : "post",
//         body:JSON.stringify
  
// });
//       const jsonres = await  Response.json();
//       console.log(jsonres);
    
//       console.log(Response.status);      // It is used check the status of code its a error ,success  
// }

// createUserdata();

//      PUT METHOD

// async function updateUserData()
// {
//     const user ={
//         username: 'user11'
//     }
//     const Response = await fetch("https://jsonplaceholder.typicode.com/users/6",{
//         method: "PUT",
//         body:JSON.stringify
//     });

//     const jsonres = await Response.json();
//     console.log(jsonres);
//     console.log(Response.status);
// }

// updateUserData();



async function DeleteUserdata(){
        const Response = await fetch("https://jsonplaceholder.typicode.com/users/5",{
            method: 'DELETE'
        });

        console.log(Response.statusText);
    }

    DeleteUserdata();