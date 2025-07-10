function addition3()
{
   console.log(`Lenght of [] is ${arguments.length}`)
   console.log(arguments)
   console.log(arguments[0])
   console.log(`the value insidde an [] is ${arguments[0]}`)
   if(arguments.length>0)
   {
        let sum=0
        for(let i=0;i<arguments.length;i++)
        {
        sum+=arguments[i]
         }
        console.log(sum)
    }       
    else
    {
    console.log('Please enter valid Parameters to the method')
    }
}


addition3([])

