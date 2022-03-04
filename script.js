let order = []
let clickedOrder = []
let score = 0

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []

  for (let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }

  const createColorElement = () => {

  }

}

const lighColor = (element, number) => {
  let time = time * 500
  
  setTimeout(() => {
    element.classList.add('selected')
  }, tempo - 250) 

  setTimeout(() => {
    element.classList.remove('selected')
  })
}

const checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver()
      break;
    }
  }

  if (clickedOrder.length === order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`)
    nextLevel()
  }
}

const click = (color) => {
  clickedOrder[clickedOrder.length] = color
  createColorElement(color).classList.add('selected')

  setTimeout(() => {
    createColorElement((color).classList.remove('selected'))
    checkOrder()
  }, 250)

}

const createColorElement = (color) => {
  if (color === 0) {
    return green
  } else if (color === 1) {
    return red
  } else if (color === 2) {
    return yellow
  } else if (color === 3) {
    return blue
  } else {
    throw new Error('Numero invalido')
  }
}

const nextLevel = () => {
  score++
  shuffleOrder()
}

const playGame = () => {
  alert('Bem-Vindo!')
  score = 0

  nextLevel()
}

const gameOver = () => {
  alert(`Você perdeu o jogo!\nSua pontuação: ${score}\nClique em Ok para iniciar um novo jogo.`)
  order = []
  clickedOrder = []

  playGame()
}

green.addEventListener('click', click(0))
red.addEventListener('click', click(1))
yellow.addEventListener('click', click(2))
blue.addEventListener('click', click(3))

playGame()