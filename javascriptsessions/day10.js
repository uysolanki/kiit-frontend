// JS object                      JSON object
// usage is restricted            usage is universal
// only to JS                     used accross multiple lang java,php,c#,python

// not compulsory                key compulsory in ""

// can pass function             function cannot be passed as a value
//   as a value


const player={
    jno:18,         //number as a value
    pname:'Virat',  //string as a value
    mp:100,         //number as a value
    rs:10000,        //number as a value
    'mom-name': 'Saroj',
    mom: 500,

    avg: function calculateAvg()  //function as a vlaue
         {
              console.log(this.rs/this.mp)
         }
                   
}

let name=499

console.log(player)
player.dadname='Premnath'
console.log(player)

console.log(`My Fav player is ${player.pname}`)
console.log(`My Fav player is ${player['mom-name']}`)

console.log(player.mom-name);


let player1={
    jno:18,         //number as a value
    pname:'Virat',  //string as a value
    mp:100,         //number as a value
    rs:10000,        //number as a value
    'mom-name': 'Saroj',
    mom: 500,

    congrat: ()=>console.log('Congrats for winning the IPL 2025')
    }
    

player1.congrat()

player1.jno=45

console.log(player1)


player1="Apple"
console.log(player1)