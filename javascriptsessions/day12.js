//for of
//sum of all odd numbers
const numbers=[1,2,3,4,5]
let sum=0;
for(let num of numbers)
{
    if(num%2==1)
    {
        sum=sum+num
    }
}

console.log(`Sum of all odd numbers ${sum}`)


const customer = {
  name: 'Tom',
  age: 40,
  city: 'New Jersey'
};



for(let key in customer)
{
    console.log(`${key}  : ${customer[key]}`)
}


  //input    [2,4,6,8,10]

//Imperative style                      Functional style
//How to do                             What to do

const numbers1=[1,2,3,4,5]
let doubledArray=[]
console.log(numbers1)
for(let num of numbers1)
{
    const double=num*num
    doubledArray.push(double)
}

console.log(doubledArray)



const doubledArrayUsingMap= numbers1.map(           //1     2       3       4       5
    (num)=>{
            return num*2;
    }
)                                                   //2    4       6        8      10

console.log(doubledArray)

 
let cars=["Audi","BMW","Merc","Maruti","Honda","Tesla","Mahindra"]  //input : size 7
        //[ 4,    3,     4,     6,       5,      5,      8]


// const carLemgths= cars.map(
//             (car)=>{
//                     return car.length
//             }
//         )

// console.log(carLemgths)


//const carLemgths= cars.map((car)=>(car.length))  //replaced {} by ()  abd removed the return keyword

const carLemgths= cars.map(car=>(car.length))  //replaced {} by ()  abd removed the return keyword
console.log(carLemgths)


//display me all odd number from  input : [1,2,3,4,5] output: 1,3,5

const numbers4=[1,2,3,4,5]

// const oddNumbersArray=numbers4.filter(
//     (num)=>{
//           return num%2==1
//     }
// )

//console.log(oddNumbersArray)


const oddNumber=numbers4.find(
    (num)=>{
          return num%2==1
    }
)

console.log(oddNumber)
