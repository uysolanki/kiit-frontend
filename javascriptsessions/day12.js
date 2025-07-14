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