const getRandomMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * moves.length)
  return moves[randomIndex]
}

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!"
  }

  if (
    (moveOne === 'scissors' && moveTwo === 'paper') ||
    (moveOne === 'rock' && moveTwo === 'scissors') ||
    (moveOne === 'paper' && moveTwo === 'rock')
  ) {
    return 'Player One wins!'
  }

  return 'Player Two wins!'
}

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById('outcome')) {
    const outcome = document.body.lastChild
    document.body.removeChild(outcome)
  }

  //document.body.removeChild(rockImg)
}

const playGame = () => {
  resetGame()
  const playerOneMove = getRandomMove()
  const playerTwoMove = getRandomMove()
  const outcome = getOutcome(playerOneMove, playerTwoMove)
  updateDOM(playerOneMove, playerTwoMove, outcome)
}

const updateDOM = (moveOne, moveTwo, outcome) => {
  // TODO Implement this method to update the DOM
  // There are some images you can use in the images directory
  const rockImg = new Image(25, 25)

  rockImg.src = '/images/rock.png'
  const paperImg = new Image(25, 25)

  paperImg.src = '/images/paper.png'
  const scissorsImg = new Image(25, 25)

  scissorsImg.src = '/images/scissors.png'

  const card1 = document.getElementById('player-one')
  const card2 = document.getElementById('player-two')

  if (moveOne === 'rock') card1.append(rockImg)
  else if (moveOne === 'paper') card1.append(paperImg)
  else if (moveOne === 'scissors') card1.append(scissorsImg)

  if (moveTwo === 'rock') card2.append(rockImg)
  else if (moveTwo === 'paper') card2.append(paperImg)
  else if (moveTwo === 'scissors') card2.append(scissorsImg)

  document.body.append(outcome)
}

const playButton = document.getElementById('play-btn')
playButton.addEventListener('click', playGame)
