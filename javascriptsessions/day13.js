import products,{ batsmen,bowler,captain } from "./data/products.js"

console.log(`My Fav Batsment is ${batsmen}`)
console.log(`My Fav Bowler is ${bowler}`)
console.log(`My Fav Captain is ${captain}`)

const productTitles=products.map(
    (product)=>{
        return product.title
    }
)

console.log(productTitles)


const electronicsProducts=products.filter(
    (product)=>{
           return product.category==="electronics"
    }
)

console.log(electronicsProducts);

const electronicProductTitles=electronicsProducts.map(
    (product)=>{
            return product.title
    }
)

console.log(electronicProductTitles)


const sumOfAllPrices=products.reduce(
    (acc,product)=>{
            return product.price+acc
    },1000
)


console.log(sumOfAllPrices)


//display the title of all mens cloting

const mensProductTitles=products.filter(
    (product)=> product.category=="men's clothing"
).map(
    (product)=>{
        return product.title
    }
)

console.log(mensProductTitles)


const mensProductTotalCost=products.filter(
    (product)=> product.category=="men's clothing"
).map(
    (product)=>{
        return product.price
    }
).reduce(
    (acc,price)=>{
            return acc+price
    },0
)

console.log(mensProductTotalCost.toFixed(2))

const shirtProduct=products.filter(
    (product)=>{
           return product.title.includes("Jacket")
    }
)

console.log(shirtProduct)


const allCategories=products.map(
    (product)=>{
            return product.category
    }
)

console.log(allCategories)

const uniqueCategories=new Set(allCategories)

console.log(uniqueCategories)

const allCategories1=[...uniqueCategories,"All"]
console.log(allCategories1)



const mensProductTotalCost1=products.filter(product=> product.category=="men's clothing").map(product=>product.price).reduce((acc,price)=>acc+price,0)

console.log(mensProductTotalCost1)


const sumOfRatingOfElectronics=products.filter(
    (product)=>{
           return product.category==="electronics"
    }
).map(
    (product)=>{
            return product.rating
    }
).reduce(
    (acc,rating)=>{
           return acc+rating.rate
    },0
)

console.log(sumOfRatingOfElectronics)


const countOfElectronicProducts=products.filter(
    (product)=>{
           return product.category==="electronics"
    }
)

console.log(countOfElectronicProducts.length)

const avgRatingForElectronics=sumOfRatingOfElectronics/countOfElectronicProducts.length
console.log(avgRatingForElectronics)


const menProduct=products.find(
    (product)=>product.id===2
)

console.log(menProduct)


function findProductById(id)
{
    const menProduct=products.find((product)=>product.id===id)
    return menProduct
}


console.log(findProductById(7)) 


function countOfProductsByCategory(category)
{
    const countOfElectronicProducts=products.filter(
    (product)=>{
           return product.category===category
    }
)
return countOfElectronicProducts.length
}


console.log(countOfProductsByCategory("jewelery"))