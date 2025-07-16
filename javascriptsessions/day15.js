function register()
{
    alert(`Your form has been submitted, Thank You`);
}


//const submitButtonElement=document.getElementById("submit-button");
const submitButtonElement=document.querySelector('#submit-button')
submitButtonElement.style.backgroundColor='Pink'

submitButtonElement.addEventListener('click',register)

//submitButtonElement.removeEventListener('click',register)


const myButtonElements=document.getElementsByClassName('my-button')
console.log(myButtonElements)

myButtonElements[0].style.backgroundColor='Blue'
myButtonElements[1].style.backgroundColor='Green'
myButtonElements[2].style.backgroundColor='Blue'
myButtonElements[3].style.backgroundColor='Green'
myButtonElements[4].style.backgroundColor='Blue'

Array.from(myButtonElements).forEach(
    (myButton,index)=>{
        if(index%2==0)
            myButton.style.backgroundColor='Yellow'
        else
            myButton.style.backgroundColor='Orange'
    }
)

//const myHeadingElements=document.getElementsByClassName('my-heading')

const myHeadingElements=document.querySelectorAll('.my-heading')
console.log(myHeadingElements)

Array.from(myHeadingElements).forEach(
    (heading)=>{
            heading.style.backgroundColor='yellow'
    }
)


// const allHeadingElement=document.getElementsByTagName('h1')
const allHeadingElement=document.querySelectorAll('h1')
console.log(allHeadingElement)

const allIndianCities=document.querySelectorAll('.country h1')
console.log(allIndianCities.length)

Array.from(allIndianCities).forEach(
    (heading)=>{
            heading.style.backgroundColor='red'
    }
)


const allDirectChildCitiesOfCountryClass=document.querySelectorAll('.country > h1')
console.log(allIndianCities.length)

Array.from(allDirectChildCitiesOfCountryClass).forEach(
    (heading)=>{
            heading.style.backgroundColor='green'
    }
)


const allInputHavingTypeAttribute=document.querySelectorAll('input[type=submit]')
console.log(allInputHavingTypeAttribute.length)

Array.from(allInputHavingTypeAttribute).forEach(
    (heading)=>{
            heading.style.border='1px solid red'
    }
)

