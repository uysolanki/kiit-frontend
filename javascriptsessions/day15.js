function register()
{
    alert('Your form has been submitted, Thank You');
}


const submitButtonElement=document.getElementById("submit-button");
submitButtonElement.style.backgroundColor='Red'

submitButtonElement.addEventListener('click',register)