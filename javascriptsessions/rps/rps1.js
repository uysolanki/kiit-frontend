    var won=0;
    var tie=0;
    var lost=0;

function playGame(playerMove)
{
    console.log(`Player Move : ${playerMove}`)
    const computerMove=generateComputerMove();
    console.log(`Computer Move : ${computerMove}`)

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
    console.log(`Result : ${result}`)

   
    switch(result)
    {
        case 'Won' : won++; break;
        case 'Lost' : lost++; break;
        case 'Tie' : tie++; break;
    }

    console.log(`Won : ${won}  Lost : ${lost}   Tie : ${tie}`)
}


function generateComputerMove()
{
   const randomNumber= Math.random();
   //console.log(randomNumber)    0 to 1       

   if(randomNumber>=0 && randomNumber<1/3)
    return 'Rock'
   if(randomNumber>=1/3 && randomNumber<2/3)
    return 'Paper'
   else
    return 'Scissors'
}

//display result on the console