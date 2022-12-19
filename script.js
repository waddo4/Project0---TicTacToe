    // Elements getting selected
const grid = document.querySelector('.grid')
const playerTurn = document.querySelector('playerTurn')
const p1score = document.querySelector('p1score')
const p2score = document.querySelector('p2score')
const p1img = document.querySelector('p1img')
const p2img = document.querySelector('p2img')
    //Will hopefully condense this list
const grid0 = grid.children[1]
const grid1 = grid.children[2]
const grid2 = grid.children[3]
const grid3 = grid.children[4]
const grid4 = grid.children[5]
const grid5 = grid.children[6]
const grid6 = grid.children[7]
const grid7 = grid.children[8]
const grid8 = grid.children[9]
    //players
const player1 = 'spaceship' 
const player2 = 'invader'
const players = [player1, player2]
let currentPlayer = players[0]

    //loop for the # of squares
// for (let i=0; i<grid.children.length; i++)


    //Function for adding player image on click + changing the currentplayer
grid0.addEventListener ('click', function (){
    grid0.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
})

grid1.addEventListener ('click', function (){
    grid1.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
})

grid2.addEventListener ('click', function (){
    grid2.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
})

grid3.addEventListener ('click', function (){
    grid3.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
})

grid4.addEventListener ('click', function (){
    grid4.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
})

grid5.addEventListener ('click', function (){
    grid5.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
})

grid6.addEventListener ('click', function (){
    grid6.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
})

grid7.addEventListener ('click', function (){
    grid7.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
})

grid8.addEventListener ('click', function (){
    grid8.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
})


