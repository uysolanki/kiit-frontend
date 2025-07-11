let a=10;
let b=20;

if(test())
    console.log(a)
else
    console.log(b)

//Truthy 
//Falsy 

function test(){
    console.log('Hi')
    return {}
}

console.log(test())

/* 
Falsy
1. 0
7. 0n
2. -0
3. ""
4. null
5. undefined
6. Nan*

Truthy
1. any non zero pos neg
2. []
3. {}
*/

//Short Circuit    ||  &&
//|| whicheve is first truthy value will be executed

let x = null || 45 || undefined || 'Apple'
console.log(x)

// && whicheve is first falsy value will be executed
let y = [] && 45 && 18 && 'Apple'
console.log(y)

console.log(Boolean(""))
console.log(Boolean(test()))