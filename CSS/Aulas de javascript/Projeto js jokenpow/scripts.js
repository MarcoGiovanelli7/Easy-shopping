const result = document.querySelector('.result')
const humamScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanNumber = 0
let machineNumber = 0

/*humanScoreNumber -> camelCase
  GAME_OPTIONS     -> Snake Case
 */


const GAME_OPTIONS = {
    ROCK: 'pedra',
    PAPER: 'papel',
    SCISSORS: 'tesoura'

}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}
const playMachine = () => {
    const choises = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choises[randomNumber]
}
const playTheGame = (humam, machine) => {

    console.log('humam:' + humam + ' machine:' + machine)


    if (humam === machine) {
        result.innerHTML = "Empate"
    } else if ((humam === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (humam === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (humam === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
        humanNumber++
        humamScore.innerHTML = humanNumber
        result.innerHTML = "Você venceu"
    } else {
        machineNumber++
        machineScore.innerHTML = machineNumber
        result.innerHTML = "Você perdeu"
    }
}




