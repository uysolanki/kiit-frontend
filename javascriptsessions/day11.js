//rest operator using array
let cars=["Audi","BMW","Merc","Maruti","Honda","Tesla","Mahindra"]

const[car1,car2,...otherCars]=cars;
console.log(car1)
console.log(car2)
console.log(otherCars)
console.log(cars)


//spread operator

let fruits=["Apple","Mango","Banana"]  // "Apple"     "Mango"     "Banana"
let veg=["Brinjal","Potato","Tomato"] 

const foodgrains=[...fruits,...veg]
console.log(foodgrains)

let fruits4=[...fruits,"Papaya","Chicku"]
console.log(fruits4)


let player1={
    jno:18,         //number as a value
    pname:'Virat',  //string as a value
    mp:100,         //number as a value
    rs:10000        //number as a value
}


//rest operator using object
//const {jno,pname,...remainingOnject}=player1
// console.log(jno)
// console.log(pname)
// console.log(remainingOnject)   //{ mp:100,rs:10000}

//spreadoperator using object
console.log(player1)
const player2={...player1,'momname':'Saroj'}
console.log(player2)


//Array Destructing
const numbers=[10,20,30];
const [number1,,number3]=numbers;
console.log(number1)  //10
console.log(number3)  //30


//Object Destructing
let player3={
    jno:18,         //number as a value
    pname:'Virat',  //string as a value
    mp:100,         //number as a value
    rs:10000        //number as a value
}
const {jno,pname,mp}=player3;
console.log(jno)
console.log(pname)
console.log(mp)


const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const {name:firstName,age:yearsOld,city:myCity}=person
console.log(firstName)
console.log(yearsOld)
console.log(myCity)


const rno=18;
const name="Alice"
const per = 78.5

const student={rno,name,per} //{rno:18, name:'Alice', per:78.5}
console.log(student)


const customer = {
  name: 'Tom',
  age: 40,
  city: 'New Jersey'
};


print(customer)

// function print(value)
// {
//     console.log(`Customer Name is ${value.name}`)
//     console.log(`Customer Age is ${value.age}`)
//     console.log(`Customer City is ${value.city}`)
// }

function print({name,age,city})
{
    console.log(`Customer Name is ${name}`)
    console.log(`Customer Age is ${age}`)
    console.log(`Customer City is ${city}`)
}