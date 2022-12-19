    // Elements getting selected
const grid = document.querySelector('.grid')
const playerTurn = document.querySelector('.playerTurn')
const p1score = document.querySelector('.p1score')
const p2score = document.querySelector('.p2score')
const p1img = document.querySelector('.p1img')
const p2img = document.querySelector('.p2img')

    //players
const player1 = 'Player1' 
const player2 = 'Player2'
const players = [player1, player2]
let currentPlayer = players[0]

    //loop for the # of squares
// for (let i=0; i<grid.children.length; i++)


    //Function for player turn + changing the currentplayer
const playersTurn = function (event){

    event.target.classList.add(currentPlayer)
        console.log(event.target);
        console.log(event.target.classList.contains(player1));
    players.reverse()
    currentPlayer = players[0]
    playerTurn.textContent = `${currentPlayer}'s turn`
        //Not working
    if (event.target.classList.contains(player1) === true || event.target.classList.contains(player2) === true) {
        event.target.removeEventListener ('click', playersTurn)
    }
}

grid.addEventListener ('click', playersTurn)


