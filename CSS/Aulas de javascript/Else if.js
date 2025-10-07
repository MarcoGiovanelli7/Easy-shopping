/*
IF.(SE)
Else.(Senão)
Else If.

*/
const temperature = 41


if (temperature === 36) {
    console.log('A temperatura está normal')
} else if (temperature > 36 && temperature <= 40) {
    console.log('Está com febre')
}else if (temperature > 40){
    console.log('Muita febre')
}
 else {
    console.log('Está com hipotermia')
}
