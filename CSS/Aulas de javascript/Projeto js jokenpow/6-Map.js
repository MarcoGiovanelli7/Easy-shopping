/* 
    MAP => Mapear o nosso array.
     - criar um novo array a partir de um array existente (array original)
     - criar um novo array com a mesma quantidade de elementos do array original
     - acitar 3 parâmetros 
        - item do array
        -index
        - array completo    
*/
const number = [1, 2, 3, 4, 5,6,7]

const double = number.map((item) =>  item * 2)    
   
   

console.log(double)