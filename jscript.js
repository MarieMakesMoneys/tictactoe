const Player = (playerName, playerLogo) => {
    //let //blabla
    return {playerName, playerLogo}
}

const user = Player('user', 'x')
const computer = Player('computer', 'o')

const gameBoard = (function() {
    let gameboard = [, , , , , , , , ]

    let player = user

    function playTTT() {
        const cells = document.querySelectorAll('.cell')
        cells.forEach((cell) => {
            cell.addEventListener('click', () => {
                let arrayIndex = cell.getAttribute('data-array-index')
                if (player === user) {
                    gameboard[arrayIndex] = 'x'
                    player = computer
                } else if (player === computer) {
                    gameboard[arrayIndex] = 'o'
                    player = user
                }
                cell.textContent = gameboard[arrayIndex]
                if (cell.textContent === 'x') {
                    cell.classList.add('cross')
                } 
            })
        })
    }

    return {gameboard, playTTT}
})()

gameBoard.playTTT()

const displayController = (function() {
    //let //blabla
    //return //blabla
})()
