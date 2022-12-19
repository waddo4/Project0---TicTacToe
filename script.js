    // Elements getting selected
const grid = document.querySelector('.grid')
const turnCounter = document.querySelector('playerTurn')
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

const playersTurn = function (){
    grid0.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
    if (grid0.classList.contains(player1) === true || grid0.classList.contains(player2) === true) {
        grid0.removeEventListener ('click', playersTurn)
    }
}
const playersTurn1 = function (){
    grid1.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
    if (grid1.classList.contains(player1) === true || grid1.classList.contains(player2) === true) {
        grid1.removeEventListener ('click', playersTurn1)
    }
}
const playersTurn2 = function (){
    grid2.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
    if (grid2.classList.contains(player1) === true || grid2.classList.contains(player2) === true) {
        grid2.removeEventListener ('click', playersTurn2)
    }
}
const playersTurn3 = function (){
    grid3.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
    if (grid3.classList.contains(player1) === true || grid3.classList.contains(player2) === true) {
        grid3.removeEventListener ('click', playersTurn3)
    }
}
const playersTurn4 = function (){
    grid4.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
    if (grid4.classList.contains(player1) === true || grid4.classList.contains(player2) === true) {
        grid4.removeEventListener ('click', playersTurn4)
    }
}
const playersTurn5 = function (){
    grid5.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
    if (grid5.classList.contains(player1) === true || grid5.classList.contains(player2) === true) {
        grid5.removeEventListener ('click', playersTurn5)
    }
}
const playersTurn6 = function (){
    grid6.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
    if (grid6.classList.contains(player1) === true || grid6.classList.contains(player2) === true) {
        grid6.removeEventListener ('click', playersTurn6)
    }
}
const playersTurn7 = function (){
    grid7.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
    if (grid7.classList.contains(player1) === true || grid7.classList.contains(player2) === true) {
        grid7.removeEventListener ('click', playersTurn7)
    }
}
const playersTurn8 = function (){
    grid8.classList.add(currentPlayer)
    players.reverse()
    currentPlayer = players[0]
    if (grid8.classList.contains(player1) === true || grid8.classList.contains(player2) === true) {
        grid8.removeEventListener ('click', playersTurn8)
    }
}

    //Function for adding player image on click + changing the currentplayer
grid0.addEventListener ('click', playersTurn)
grid1.addEventListener ('click', playersTurn1)
grid2.addEventListener ('click', playersTurn2)
grid3.addEventListener ('click', playersTurn3)
grid4.addEventListener ('click', playersTurn4)
grid5.addEventListener ('click', playersTurn5)
grid6.addEventListener ('click', playersTurn6)
grid7.addEventListener ('click', playersTurn7)
grid8.addEventListener ('click', playersTurn8)

