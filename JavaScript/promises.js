
let myPromise1 = new Promise(function(myResolve , myReject)
{
    let a = 'b';
    if(a == 'b')
                                // if(a === 15)
    {
        myResolve("sucess");
    }
    else
    {
        myReject("error")
    }
});


// let myPromise2 = new Promise(function(myResolve , myReject)
// {
//     let a = 'b';
//      myResolve();
//                                 // if(a === 15)
   
//     myReject();
   
// });

// myPromise2.then(
//     function(value)
//     {
//         myResolve("sucess"); 
//         myResolve("sucess");
//     }
//    void function(error)
//     {
//         myReject("error")
//         myResolve("sucess");
//     }
// );
    
// .then(res => console.log(res))
// .catch(err => console.log(err));


 
 // object 
 
 
 
 
 const per ={
    nam : 'adddf',
    age  : 34,
    arr  : [2,4,6,7],
 }
 console.log(per.nam,per.arr[3]);
