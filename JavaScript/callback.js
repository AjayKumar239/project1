function display( callbackfun)
{
    console.log("This is display function ");
    callbackfun();
}
display( callbackfun )

function callbackfun()
{
    console.log("Call back Function :")
}


// example 

function add(a,b,res)
{
    let c = a + b;
    res(c);
}

add(4,5,res);

function res(c)
{
    let d = c*4;
    console.log("Call backfunction :",d);
}


//error

try{
    let a = 3;
    console.log(a);
}
catch(error)
{
    console.error("error occured ",error.message);
}
finally{
    console.log("final")
}