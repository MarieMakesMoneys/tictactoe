const Player = (playerName, playerLogo) => {
    return {playerName, playerLogo}
}

let player1Name = document.querySelector('input.player-one').value
let player2Name = document.querySelector('input.player-two').value

let user = Player(player1Name, 'x')
let computer = Player(player2Name, 'o')

const renamePlayers = (function() {
    
    const submitBtn1 = document.querySelector('.submit1')
    submitBtn1.addEventListener('click', function submitForm(event) {
        event.preventDefault()
        
        player1Name = document.querySelector('input.player-one')
        user.playerName = player1Name.value
    })

    const submitBtn2 = document.querySelector('.submit2')
    submitBtn2.addEventListener('click', function submitForm(event) {
        event.preventDefault()
        
        player2Name = document.querySelector('input.player-two')
        computer.playerName = player2Name.value
    })

})()

const playGame = (function() {

    let gameboard = ['','','','','','','','','']
    let player = user

    function playTTT() {
        gameboard = ['','','','','','','','','']
        const cells = document.querySelectorAll('.cell')
        cells.forEach((cell) => {
            cell.addEventListener('click', () => {
                let arrayIndex = cell.getAttribute('data-array-index')
                if (gameboard[arrayIndex] === '') {
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
                }
                checkForWinner()
            })
        })
    }

    function checkForWinner() {
        const board = document.querySelector('.board')
        if (gameboard[0] === 'x' && gameboard[1] === 'x' && gameboard[2] === 'x' ||
            gameboard[3] === 'x' && gameboard[4] === 'x' && gameboard[5] === 'x' ||
            gameboard[6] === 'x' && gameboard[7] === 'x' && gameboard[8] === 'x' ||
            gameboard[0] === 'x' && gameboard[3] === 'x' && gameboard[6] === 'x' ||
            gameboard[1] === 'x' && gameboard[4] === 'x' && gameboard[7] === 'x' ||
            gameboard[2] === 'x' && gameboard[5] === 'x' && gameboard[8] === 'x' ||
            gameboard[0] === 'x' && gameboard[4] === 'x' && gameboard[8] === 'x' ||
            gameboard[2] === 'x' && gameboard[4] === 'x' && gameboard[6] === 'x') {
                let winnerDisplay = document.createElement('div')
                winnerDisplay.classList.add('winner')
                let winnerAnnouncement = document.createElement('p')
                winnerAnnouncement.textContent = `Congratulations ${user.playerName}! You won!`
                winnerDisplay.appendChild(winnerAnnouncement)
                board.appendChild(winnerDisplay)
        }
        if (gameboard[0] === 'o' && gameboard[1] === 'o' && gameboard[2] === 'o' ||
            gameboard[3] === 'o' && gameboard[4] === 'o' && gameboard[5] === 'o' ||
            gameboard[6] === 'o' && gameboard[7] === 'o' && gameboard[8] === 'o' ||
            gameboard[0] === 'o' && gameboard[3] === 'o' && gameboard[6] === 'o' ||
            gameboard[1] === 'o' && gameboard[4] === 'o' && gameboard[7] === 'o' ||
            gameboard[2] === 'o' && gameboard[5] === 'o' && gameboard[8] === 'o' ||
            gameboard[0] === 'o' && gameboard[4] === 'o' && gameboard[8] === 'o' ||
            gameboard[2] === 'o' && gameboard[4] === 'o' && gameboard[6] === 'o') {
                let winnerDisplay = document.createElement('div')
                winnerDisplay.classList.add('winner')
                let winnerAnnouncement = document.createElement('p')
                winnerAnnouncement.textContent = `Congratulations ${computer.playerName}! You won!`
                winnerDisplay.appendChild(winnerAnnouncement)
                board.appendChild(winnerDisplay)
        }
    }

    return {playTTT}
})()

playGame.playTTT()

const clear = document.querySelector('.restart')
clear.addEventListener('click', () => window.location.reload());