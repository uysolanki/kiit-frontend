const answer=area(10,20)
console.log(answer)
function area(length,width)
{
    console.log(length)
    console.log(width)
    const result=length*width
    console.log(result)
    return result
}


function areaCircle(radius)
{
    const result=Math.PI*radius*radius
    console.log(result.toFixed(2))
}

areaCircle(5)

function primeNumber(number)
{
    let flag=0;
    for(let i=2;i<number;i++)
    {
        if(number%i==0)
        {
            flag=1;
            break;
        }
    }

    if(flag==0)
        console.log('Prime Number')
    else
        console.log('Not Prime')
}

primeNumber(27)

function sumOfDigit(number)     //123
{
    let sum=0
    while(number>0)
    {
        const r=number %10;
        sum=sum+r;
        number=parseInt(number/10);
    }
    return sum
}
ans=sumOfDigit(123)
console.log(ans)

n=7777
result=sumOfDigitToSingleDigit(n)
//console.log('The sum reduced to a single digit for number',n,' is ', result)
console.log(`The sum reduced to a single digit for number ${n} is ${result}`)  //back tick operator
function sumOfDigitToSingleDigit(number)
{
    do
    {
    var sum =  sumOfDigit(number)   //7
    number=sum;                     //number=7
    }while(number>9);               //7>9
    return sum
}

/*sumOfDigit till it reduces to a single sumOfDigit
4444
16
7 answer
7777
28
10
1 answer*/

//sum of 2 numbers

function addition(value1,value2)
{
    const result=value1+value2;
    console.log(result)
}

addition(10,20)

//sum of 3 numbers

function addition1(value1,value2,value3)
{
    const result=value1+value2+value3;
    console.log(result)
}

addition1(10,20,30)

//sum of 4 numbers

function addition2(value1,value2,value3,value4)
{
    const result=value1+value2+value3+value4;
    console.log(result)
}

addition2(10,20,30,40)


function addition3()
{
   console.log(arguments.length)
   console.log(arguments)
   console.log(arguments[0])
   if(arguments.length>0)
   {
        let sum=0
        for(let i=0;i<arguments.length;i++)
        {
        sum+=arguments[i]
         }
        console.log(sum)
    }       
    else
    {
    console.log('Please enter valid Parameters to the method')
    }
}

addition3(10,20,30,40,50,60,70)
addition3([])
//addition3("Apple","Mango")
