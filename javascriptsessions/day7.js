//          0     1     2     3         4        5      6
let cars=["Audi","BMW","Merc","Maruti","Honda","Tesla","Mahindra"]

//slice splice will give sub arrays
//slice(starting index, ending+1), OG array will not be impacted , copy paste
slicedCars=cars.slice(1,4) 
console.log(slicedCars)
console.log(cars)

//splice(starting index, number of item), OG array will not be impacted , copy paste
splicedCars=cars.splice(1,4) 
console.log(splicedCars)
console.log(cars)

console.log(Array.isArray(splicedCars))

console.log(Array.isArray([]))

//[] is a list  array is a list []
//HTMLCollection is also a list

// htmlCol=new HTMLAllCollection(["Apple","Mango"])
// Array.from(htmlCol).forEach

let z=Array.from("Apple");   // ['1','2','3']
console.log(z)

