/*
  REDUCE
  -Retorna um valor (pode ser um novo array,objeto,string,número, etc)
  - Aceita 4 parâmetros
    - Acumulador
    - Valor atual
    - Index
    - Array completo

*/ 
const list = [1,2,3,4,5,6,7,];

const sum = list.reduce( (acumulador, valorAtual) => {
   return acumulador + valorAtual
},0);





