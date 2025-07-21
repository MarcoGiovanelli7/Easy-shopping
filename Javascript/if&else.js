/*Controlador de fluxo 
   -IF(se) -> se a condição for verdadeira, executa o bloco de código
   -ELSE (se nao)

   Operadores de comparação
   >maior que
   <menor que 
   ==igual que
   */
  const notadoaluno = 10
  const notadecorte = 5

  if (notadoaluno > notadecorte) {
    //o quie sera executado,se if for verdadeiro
    console.log('Parabéns, você foi aprovado!')
  } else {
       //se o if for falso,ele entra aqui
       console.log('Infelizmente você foi reprovado!')
  }
