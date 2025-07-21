/*Controlador de fluxo 
   -IF(se) -> se a condição for verdadeira, executa o bloco de código
   -ELSE (se nao)

   Operadores de comparação
   >maior que
   <menor que 
   ==igual que
   */
  const senhadousuario = 123456
  const senhadigitada = 123456

  if (senhadousuario == senhadigitada) {
    //o quie sera executado,se if for verdadeiro
    console.log('login realizado com sucesso!')
  } else {
       //se o if for falso,ele entra aqui
       console.log('senha incorreta!')
  }
