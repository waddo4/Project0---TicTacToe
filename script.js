    // Elements getting selected
const tiles = document.querySelectorAll('.tile')
const playerTurn = document.querySelector('.playerTurn')
const p1score = document.querySelector('.p1score')
const p2score = document.querySelector('.p2score')
const p1img = document.querySelector('.p1img')
const p2img = document.querySelector('.p2img')

    //Players
const player1 = 'Player1' 
const player2 = 'Player2'
const players = [player1, player2]
let currentPlayer = players[0]

    //Counter for for a draw
let draw = 0
console.log(tiles.length);

    //Counter for player score
let counter1 = parseInt(p1score.textContent)
let counter2 = parseInt(p2score.textContent)

    //Function for player turn + changing the currentplayer
        //Attribute portion of the function sourced from chatGPT 
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
        tiles[0].getAttribute('player') === 'Player1' && tiles[4].getAttribute('player') === 'Player1' && tiles[8].getAttribute('player') === 'Player1'|| 
        tiles[2].getAttribute('player') === 'Player1' && tiles[4].getAttribute('player') === 'Player1' && tiles[6].getAttribute('player') === 'Player1') {
            playerTurn.textContent = `${players[1]} is the winner!`
            counter1 += 1000
            p1score.innerHTML = counter1
            tiles.forEach((tile) => {
                tile.setAttribute('selected', 'true')
            })
        }

            //Player 2 win conditions (will condense)
        if (tiles[0].getAttribute('player') === 'Player2' && tiles[1].getAttribute('player') === 'Player2' && tiles[2].getAttribute('player') === 'Player2' || 
        tiles[3].getAttribute('player') === 'Player2' && tiles[4].getAttribute('player') === 'Player2' && tiles[5].getAttribute('player') === 'Player2' || 
        tiles[6].getAttribute('player') === 'Player2' && tiles[7].getAttribute('player') === 'Player2' && tiles[8].getAttribute('player') === 'Player2' || 
        tiles[0].getAttribute('player') === 'Player2' && tiles[3].getAttribute('player') === 'Player2' && tiles[6].getAttribute('player') === 'Player2' || 
        tiles[1].getAttribute('player') === 'Player2' && tiles[4].getAttribute('player') === 'Player2' && tiles[7].getAttribute('player') === 'Player2' || 
        tiles[2].getAttribute('player') === 'Player2' && tiles[5].getAttribute('player') === 'Player2' && tiles[8].getAttribute('player') === 'Player2' || 
        tiles[0].getAttribute('player') === 'Player2' && tiles[4].getAttribute('player') === 'Player2' && tiles[8].getAttribute('player') === 'Player2'|| 
        tiles[2].getAttribute('player') === 'Player2' && tiles[4].getAttribute('player') === 'Player2' && tiles[6].getAttribute('player') === 'Player2') {
            playerTurn.textContent = `${players[1]} is the winner!`
            counter2 += 1000
            p2score.innerHTML = counter2
            tiles.forEach((tile) => {
                tile.setAttribute('selected', 'true')
            })
        }
    })
})
