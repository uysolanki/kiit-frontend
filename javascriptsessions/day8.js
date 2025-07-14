//Arrow function =>     -> java

// function greet()
// {
//     console.log("Welcome")
// }


//greet();

const greet=()=>
{
    console.log("Welcome to my Channel")
}

greet();


const greet1=(name)=>
{
    console.log(`Welcome ${name} to my Channel`)
}

greet1('Alice')


const greet2=(name)=>console.log(`Welcome ${name} to my Channel`)

greet2('Ben')

const greet3=name=>console.log(`Welcome ${name} to my Channel`)

greet3('Chris')


function areaRect(length,width)
{
    let result=length*width;
    return result;
}


let areaRect1=(length,width)=>
{
    let result=length*width;
    return result;
}

console.log(areaRect1(10,20));


