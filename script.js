
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



grid0.addEventListener ('click', function (){
    grid0 = p1img.cloneNode(false)
})
