//callback function

function test(value)
{
console.log(typeof value)
}


function greet(name)
{
console.log(`Welcome ${name}`)
}


// let a=10;
// let b=10.0
// let c='Apple'
// let d=true
// let e=["Merc","Audi","BMW"]
// test(a)
// test(b)
// test(c)
// test(d)
// test(e)
// test(greet)//passing a function name as a parameter is called as function call



//lunch
//RamaKrishna  food
//theobroma    dessert

function lunch(starter,maincourse,dessert)
{
    console.log(`I had ${starter} as a starter for lunch`)
    console.log(`I had ${maincourse} as a maincourse for lunch`)
    dessert();
}

function starbucks()
{
    console.log('Happy Birthday Alice')
}

lunch('veg crispy','Mutter Paneer', starbucks)

//add and display 2 numbers

function sum(a,b,callback)
{
    let result=a+b;
    callback(result);
}

function display(value)
{
console.log(`The result is ${value}`)
}

sum(10,20,display)


// greet();

function greet()
{
console.log("Have a Nice day")
}

//setTimeout(task to be performed, after how much time in ms 1000 is 1 sec)
setTimeout(()=>
{
console.log("Welcome")
},5000)

setTimeout(greet,10000)
setInterval(greet,10000)
