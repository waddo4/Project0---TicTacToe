// Elements getting selected
const tiles = document.querySelectorAll('.tile')
const playerTurn = document.querySelector('.playerTurn')
const p1score = document.querySelector('.p1score')
const p2score = document.querySelector('.p2score')
const p1img = document.querySelector('.p1img')
const p2img = document.querySelector('.p2img')
const resetBtn = document.querySelector('.reset')
const stopBtn = document.querySelector('.stop')
const side1 = document.querySelector('.side1')
const side2 = document.querySelector('.side2')
const sideTitle1 = document.querySelector('.sideT1')
const sideTitle2 = document.querySelector('.sideT2')
const style = document.querySelector('.style')
const container = document.querySelector('.container')
const player1Title = document.querySelector('.player1Title')
const player2Title = document.querySelector('.player2Title')

//Players
const player1 = 'Player1'
const player2 = 'Player2'
const players = [player1, player2]
let currentPlayer = players[0]

//Counter for a draw
let draw = 0

//Changing player's score into a number
let counter1 = parseInt(p1score.textContent)
let counter2 = parseInt(p2score.textContent)

//Board reset button
resetBtn.addEventListener('click', () => {
    tiles.forEach((tile) => {
        tile.classList.remove(player1, player2)
        tile.removeAttribute('selected')
        tile.removeAttribute('player')
    })
    draw = 0
})

//Stops sidebar animations
stopBtn.addEventListener('click', () => {

    side1.classList.toggle("side1Off")
    side2.classList.toggle("side2Off")
    sideTitle1.classList.toggle("sideT1On")
    sideTitle2.classList.toggle("sideT2On")

})

//Darkmode toggle
style.addEventListener('click', () => {

    container.classList.toggle("containerInv")
    // player1.textContent.toggle("invader2")
    // player2.textContent.toggle("spaceship1")
    player1Title.classList.toggle("playerTitleInv")
    player2Title.classList.toggle("playerTitleInv")
    stopBtn.classList.toggle("stopInv")
    resetBtn.classList.toggle("resetInv")
    sideTitle1.classList.toggle("sideTitleInv")
    sideTitle2.classList.toggle("sideTitleInv")
    side1.classList.toggle("sideInv")
    side2.classList.toggle("sideInv")
    tiles.forEach((tile) => {
        tile.classList.toggle("tileInv")
    });
    style.classList.toggle("styleInv")

})

//Function for player turn + changing the currentplayer
tiles.forEach((tile) => {
    tile.addEventListener('click', () => {

        //Returns if the tile selected has already been clicked.
        if (tile.getAttribute('selected') === 'true') {
            return;
        }

        //What happens to the tile after it's clicked.
        tile.setAttribute('selected', 'true');
        tile.setAttribute('player', currentPlayer);
        tile.classList.add(currentPlayer)
        players.reverse()
        currentPlayer = players[0]
        playerTurn.textContent = `${currentPlayer}'s turn`
        draw++

        //Draw condition
        if (draw === tiles.length) {
            playerTurn.textContent = `It's a draw!`
        }

        //Player 1 win conditions
        if (tiles[0].getAttribute('player') === 'Player1' && tiles[1].getAttribute('player') === 'Player1' && tiles[2].getAttribute('player') === 'Player1' ||
            tiles[3].getAttribute('player') === 'Player1' && tiles[4].getAttribute('player') === 'Player1' && tiles[5].getAttribute('player') === 'Player1' ||
            tiles[6].getAttribute('player') === 'Player1' && tiles[7].getAttribute('player') === 'Player1' && tiles[8].getAttribute('player') === 'Player1' ||
            tiles[0].getAttribute('player') === 'Player1' && tiles[3].getAttribute('player') === 'Player1' && tiles[6].getAttribute('player') === 'Player1' ||
            tiles[1].getAttribute('player') === 'Player1' && tiles[4].getAttribute('player') === 'Player1' && tiles[7].getAttribute('player') === 'Player1' ||
            tiles[2].getAttribute('player') === 'Player1' && tiles[5].getAttribute('player') === 'Player1' && tiles[8].getAttribute('player') === 'Player1' ||
            tiles[0].getAttribute('player') === 'Player1' && tiles[4].getAttribute('player') === 'Player1' && tiles[8].getAttribute('player') === 'Player1' ||
            tiles[2].getAttribute('player') === 'Player1' && tiles[4].getAttribute('player') === 'Player1' && tiles[6].getAttribute('player') === 'Player1') {
            playerTurn.textContent = `${players[1]} is the winner!`
            counter1 += 1000
            p1score.innerHTML = counter1
            tiles.forEach((tile) => {
                tile.classList.remove(player1, player2)
                tile.removeAttribute('selected')
                tile.removeAttribute('player')
            })
            draw = 0
        }

        //Player 2 win conditions (will condense)
        if (tiles[0].getAttribute('player') === 'Player2' && tiles[1].getAttribute('player') === 'Player2' && tiles[2].getAttribute('player') === 'Player2' ||
            tiles[3].getAttribute('player') === 'Player2' && tiles[4].getAttribute('player') === 'Player2' && tiles[5].getAttribute('player') === 'Player2' ||
            tiles[6].getAttribute('player') === 'Player2' && tiles[7].getAttribute('player') === 'Player2' && tiles[8].getAttribute('player') === 'Player2' ||
            tiles[0].getAttribute('player') === 'Player2' && tiles[3].getAttribute('player') === 'Player2' && tiles[6].getAttribute('player') === 'Player2' ||
            tiles[1].getAttribute('player') === 'Player2' && tiles[4].getAttribute('player') === 'Player2' && tiles[7].getAttribute('player') === 'Player2' ||
            tiles[2].getAttribute('player') === 'Player2' && tiles[5].getAttribute('player') === 'Player2' && tiles[8].getAttribute('player') === 'Player2' ||
            tiles[0].getAttribute('player') === 'Player2' && tiles[4].getAttribute('player') === 'Player2' && tiles[8].getAttribute('player') === 'Player2' ||
            tiles[2].getAttribute('player') === 'Player2' && tiles[4].getAttribute('player') === 'Player2' && tiles[6].getAttribute('player') === 'Player2') {
            playerTurn.textContent = `${players[1]} is the winner!`
            counter2 += 1000
            p2score.innerHTML = counter2
            tiles.forEach((tile) => {
                tile.classList.remove(player1, player2)
                tile.removeAttribute('selected')
                tile.removeAttribute('player')
            })
            draw = 0
        }
    })
})
