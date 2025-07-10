  // var a=10;                                   //traditional                             block{} level scope                                    block level scope
        // console.log(a);                             //global , functional scope
        // console.log(typeof a)

        
        var k=99;
        //console.log(c)
        function test()                             //variable / function hoisting
        {
                                      //hoisted at the top of the scope
            console.log("Welcome to KIIT")
            let b=18;
                                                    //TDZ hoisted valeu=undefined               cannot access before init                               cannot access before init
            if(true)
            {
                console.log(c)
                var c=45;                           //initialised
                var c=63;

                var k;
                k=100;

                let x;
                x=9;
                console.log(c)
            }  
            
            if( true)                                    //can be redeclared in the same scope      cannot be redeclared in the same scope              cannot be redeclared in the same scope
            {
                    let a=100;
                    const j="Apple";
            }
            if(true)
            {
                    let a=200;
            }
            console.log(c)
            console.log(k)                          //can only be declared without init            //can only be declared without init                  has to be initialised while declareing
        }                                                                                          //can be reinitialised                               cannot be reitialised

        
       
        test()

        let a;  //variable declration
        a=10    //variable initialization

        a=10; //variable declaration + initialization
        
        //tailor rule : measure twice cut once
