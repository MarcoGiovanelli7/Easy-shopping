/*
Estrutura de Repetição - loop
..-.FOR
      1. Inicialização-Criar uma variável e colocar o valor inicial pra ela
      2. Condição-Enquanto for true,o laço continurá interando
                  Ele irá verificar antes de cada interação
      3.EXPRESSAO FINAL - O que irá acontecer a cada vez que o  nosso laço for iterado
    for ([inicialização]; [condição]; [expressão final]) {
    seu código aqui
}
    */
    const users = ['Luiz', 'Maria', 'João']
    for(let i = 0; i < users.length; i++){
        console.log(users[i])
    }