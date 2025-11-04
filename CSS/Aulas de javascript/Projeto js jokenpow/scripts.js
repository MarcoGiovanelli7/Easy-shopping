const result = document.querySelector('.result')
const humamScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanNumber = 0
let machineNumber = 0


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}
const playMachine = () => {
    const choises = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return choises[randomNumber]
}
const playTheGame = (humam, machine) => {

    console.log('humam:' + humam + ' machine:' + machine)


    if (humam === machine) {
        result.innerHTML = "Empate"
    } else if ((humam === 'papel' && machine === 'pedra') ||
        (humam === 'pedra' && machine === 'tesoura') ||
        (humam === 'tesoura' && machine === 'papel')) {
        humanNumber++
        humamScore.innerHTML=humanNumber
        result.innerHTML = "Você venceu"
    } else {
        machineNumber++
        machineScore.innerHTML=machineNumber
        result.innerHTML = "Você perdeu"
    }
}




