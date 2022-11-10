const Player = (playerName, playerLogo) => {
    //let //blabla
    //return //blabla
}

const gameBoard = (function() {
    let gameboard = ['x', 'x', 'x', 'o', 'x', , 'o', 'o', 'o']

    function displayGameboard() {
        let cells = document.querySelectorAll('div.cell')
        cells.forEach((cell) => {
            let arrayIndex = cell.getAttribute('data-array-index')
            cell.textContent = gameboard[arrayIndex]
            if (cell.textContent === 'x') {
                cell.classList.add('cross')
            }
        })
    }

    return {gameboard, displayGameboard}
})()

gameBoard.displayGameboard()

const displayController = (function() {
    //let //blabla
    //return //blabla
})()
