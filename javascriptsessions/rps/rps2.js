 
    let score={
        won:0,
        tie:0,
        lost:0
    }

   var movesParaElement=document.querySelector('#moves-para') 
   var resultParaElement=document.querySelector('#result-para') 
   var scoreParaElement=document.querySelector('#score-para') 

function playGame(playerMove)
{
   
    const computerMove=generateComputerMove();
   
    movesParaElement.innerHTML= `Player Move : ${playerMove} Computer Move : ${computerMove}`
    let result;
    switch(playerMove)
    {
        case 'Rock' : 
                        switch(computerMove)
                        {
                            case 'Rock':  result='Tie'; break;
                            case 'Paper': result='Lost'; break;
                            case 'Scissors': result='Won'; break;
                        }
                        break;

        case 'Paper' : 
                        switch(computerMove)
                        {
                            case 'Rock':  result='Won'; break;
                            case 'Paper': result='Tie'; break;
                            case 'Scissors': result='Lost'; break;
                        }
                        break;

        case 'Scissors' : 
                        switch(computerMove)
                        {
                            case 'Rock':  result='Lost'; break;
                            case 'Paper': result='Won'; break;
                            case 'Scissors': result='Tie'; break;
                        }
                        break;
        
    }

    resultParaElement.innerHTML=`Result : ${result}`
   
    switch(result)
    {
        case 'Won' : score.won++; break;
        case 'Lost' : score.lost++; break;
        case 'Tie' : score.tie++; break;
    }

    scoreParaElement.innerHTML=`Won : ${score.won}  Lost : ${score.lost}   Tie : ${score.tie}`
}


function generateComputerMove()
{
   const randomNumber= Math.random();
   //console.log(randomNumber)

   if(randomNumber>=0 && randomNumber<1/3)
    return 'Rock'
   if(randomNumber>=1/3 && randomNumber<2/3)
    return 'Paper'
   else
    return 'Scissors'
}


//display result on the webpage score is an object