let cars=["Audi","BMW","Merc","Maruti"]

console.log(typeof cars)

console.log(cars.length)

cars.push("Maruti")     //add at last position
console.log(cars)
 
let car=cars.pop();    //remove from last position
console.log(car)
console.log(cars)

cars.unshift("Honda")   //add at first position
console.log(cars)

cars.shift()
console.log(cars)      //remove from first position

console.log(cars.at(1))
console.log(cars[1])

console.log(cars.indexOf("Merc"))

if(cars.includes("Tata"))
    console.log('Found')
else
    console.log('Not Found')


let numbers=[1,2,3,4,5]
let sum=0;
for(let i=0;i<numbers.length;i++)
    sum+=numbers[i]

console.log(sum)

sum=0
for(let n of numbers)       //for of (for each)     for  in(iterate thru the keys of an object)
    sum+=n

console.log(sum)


console.log(cars)   //ALL if 1 false output is false &&
console.log(cars.every((car)=>car.length>=3)) 
                    //ANY if 1 true output is true ||
console.log(cars.some((car)=>car.length>=3)) 

cars.fill("Tesla")
console.log(cars)

let fruits=["Apple","Mango","Banana"]
let veg=["Brinjal","Potato","Tomato"]

// let foodItems=fruits.concat(veg);
// console.log(foodItems)
fruits.push(veg)
console.log(fruits)

//join implode   Array ->  String
//              "Apple","Mango","Banana" -> "Apple-Mango-Banana"

let fruitString=fruits.join()
console.log(fruitString)

console.log(typeof fruitString)

let numbers1=[1,2,[3,4]]
console.log(numbers1)
let flatArray=numbers1.flat()
console.log(flatArray)

let numbers2=[1,7,3,9,8,9,5]    //the first element which fullfils the condition
let firstEvenNumber=numbers2.findIndex((num)=>num%2==0)
console.log(firstEvenNumber)

let numberString=numbers.toString()
console.log(typeof numberString)