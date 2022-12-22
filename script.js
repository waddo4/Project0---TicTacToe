// Elements getting selected
const tiles = document.querySelectorAll('.tile')
const playerTurn = document.querySelector('.playerTurn')
const p1score = document.querySelector('.p1score')
const p2score = document.querySelector('.p2score')
const resetBtn = document.querySelector('.reset')
const stopBtn = document.querySelector('.stop')
const side1 = document.querySelector('.side1')
const side2 = document.querySelector('.side2')
const sideTitle1 = document.querySelector('.sideT1')
const sideTitle2 = document.querySelector('.sideT2')
const styleBtn = document.querySelector('.styleBtn')
const container = document.querySelector('.container')
const player1Title = document.querySelector('.player1Title')
const player2Title = document.querySelector('.player2Title')
const player1Img = document.querySelector('.Player1')
const player2Img = document.querySelector('.Player2')
const startScreen = document.querySelector('.startScreen')
const mainScreen = document.querySelector('.mainScreen')
const muteBtn = document.querySelector('.mute')

//Players + current player
const player1 = 'Player1'
const player2 = 'Player2'
const players = [player1, player2]
let currentPlayer = players[0]

//Counter for a draw
let draw = 0

//Changing player's score into a number
let counter1 = parseInt(p1score.textContent)
let counter2 = parseInt(p2score.textContent)

//Function for player turn + changing the currentplayer + calculating win/draw
tiles.forEach((tile) => {
    tile.addEventListener('click', () => {

        //Returns if the tile selected has already been clicked
        if (tile.getAttribute('selected') === 'true') {
            return;
        }

        //Returns if a player wins
        if (tile.getAttribute('freeze') === 'true') {
            return;
        }

        //What happens to the tile after it's clicked
        shootingSound.play()
        tile.setAttribute('selected', 'true');
        tile.setAttribute('player', currentPlayer);
        tile.classList.add(currentPlayer)
        players.reverse()
        currentPlayer = players[0]
        playerTurn.textContent = `${currentPlayer}'s turn`
        draw++
        
        //Draw condition
        if (draw === tiles.length) {

            ufo.play()
            playerTurn.textContent = `It's a draw!`
            draw = 0;
            setTimeout(() => {
                playerTurn.textContent = `${currentPlayer}'s turn`;
                tiles.forEach((tile) => {
                    tile.classList.remove(player1, player2)
                    tile.removeAttribute('selected')
                    tile.removeAttribute('player')
                })
            }, '2000')
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

            humansWin.play()    
            playerTurn.textContent = `${players[1]} is the winner!`
            counter1 += 1000
            p1score.innerHTML = counter1
            winningBonus()
            tiles.forEach((tile) => {
                tile.setAttribute('freeze', 'true')
            })
            setTimeout(() => {
                playerTurn.textContent = `${currentPlayer}'s turn`;
                tiles.forEach((tile) => {
                    tile.classList.remove(player1, player2)
                    tile.removeAttribute('selected')
                    tile.removeAttribute('player')
                    tile.removeAttribute('freeze')
                })
            }, '2000')
            draw = 0
        }

        //Player 2 win conditions
        if (tiles[0].getAttribute('player') === 'Player2' && tiles[1].getAttribute('player') === 'Player2' && tiles[2].getAttribute('player') === 'Player2' ||
            tiles[3].getAttribute('player') === 'Player2' && tiles[4].getAttribute('player') === 'Player2' && tiles[5].getAttribute('player') === 'Player2' ||
            tiles[6].getAttribute('player') === 'Player2' && tiles[7].getAttribute('player') === 'Player2' && tiles[8].getAttribute('player') === 'Player2' ||
            tiles[0].getAttribute('player') === 'Player2' && tiles[3].getAttribute('player') === 'Player2' && tiles[6].getAttribute('player') === 'Player2' ||
            tiles[1].getAttribute('player') === 'Player2' && tiles[4].getAttribute('player') === 'Player2' && tiles[7].getAttribute('player') === 'Player2' ||
            tiles[2].getAttribute('player') === 'Player2' && tiles[5].getAttribute('player') === 'Player2' && tiles[8].getAttribute('player') === 'Player2' ||
            tiles[0].getAttribute('player') === 'Player2' && tiles[4].getAttribute('player') === 'Player2' && tiles[8].getAttribute('player') === 'Player2' ||
            tiles[2].getAttribute('player') === 'Player2' && tiles[4].getAttribute('player') === 'Player2' && tiles[6].getAttribute('player') === 'Player2') {

            invadersWin.play()
            playerTurn.textContent = `${players[1]} is the winner!`
            counter2 += 1000
            p2score.innerHTML = counter2
            winningBonus()
            tiles.forEach((tile) => {
                tile.setAttribute('freeze', 'true')
            })
            setTimeout(() => {
                playerTurn.textContent = `${currentPlayer}'s turn`;
                tiles.forEach((tile) => {
                    tile.classList.remove(player1, player2)
                    tile.removeAttribute('selected')
                    tile.removeAttribute('player')
                    tile.removeAttribute('freeze')
                })
            }, '2000')
            draw = 0
        }
    })
})

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

    document.body.classList.toggle("sidebar")

})

//Inverted style toggle
styleBtn.addEventListener('click', () => {

    document.body.classList.toggle("inverted")

})

//Hides main screen when the page loads
window.onload = function () {
    mainScreen.style.display = 'none';
}

//Swaps from starting screen to main screen when the start text is clicked
document.querySelector('.start').addEventListener('click', function () {
    
    credit.play()
    setTimeout(() => {
        startSound.play()
        startScreen.style.display = 'none';
        mainScreen.style.display = 'grid';
    }, '1500')
})

//Sound effects
let shootingSound = new Audio('Images/Sounds/shoot.wav')
let invadersWin = new Audio('Images/Sounds/explosion.wav')
let humansWin = new Audio('Images/Sounds/invaderkilled.wav')
let gameMusic = new Audio('Images/Sounds/05-Attack of the Invaders.mp3')
let kawaiiMusic = new Audio('Images/Sounds/08-Kawaii Battle Option.mp3')
let startSound = new Audio('Images/Sounds/03-Start.mp3')
let credit = new Audio('Images/Sounds/04-Credit.mp3')
let ufo = new Audio('Images/Sounds/ufo_lowpitch.wav')
let win = new Audio('Images/Sounds/07-You Win.mp3')

//Sound volume
shootingSound.volume = 0.05;
invadersWin.volume = 0.05;
gameMusic.volume = 0.3;
gameMusic.loop = true;
kawaiiMusic.volume = 0.3;
startSound.volume = 0.5;
credit.volume = 0.5;
ufo.volume = 0.05;
win.volume = 0.5;
humansWin.volume = 0.05;
humansWin.playbackRate = 0.5;


//Array of all audio elements
let audioElements = [
    shootingSound,
    invadersWin,
    humansWin,
    gameMusic,
    kawaiiMusic,
    startSound,
    credit,
    ufo,
    win
]

//Toggles mute for all audio elements
let isMuted = false;
muteBtn.addEventListener ('click', function(){

    isMuted = !isMuted;

    for (let i=0; i<audioElements.length; i++) {
        audioElements[i].muted = isMuted
    }
})

//Function for winning bonuses
const winningBonus = function() {
if (p1score.innerHTML === "3000" || p2score.innerHTML === "3000") {
    gameMusic.play()
}
if (p1score.innerHTML === "6000" || p2score.innerHTML === "6000") {
    gameMusic.pause()
    win.play()
    setTimeout(() => {
        kawaiiMusic.play()
    }, '1000')
}}
