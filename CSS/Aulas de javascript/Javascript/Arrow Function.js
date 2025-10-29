/* Functions / funçoes

   Function padrão -> function() {}
   Arrow Function  -> () => {}
   
   Não escrvemos "function".
   Além disso,usamos o sinal "=>" para criá-la,
   o que lembra uma flecha, por isso o nome "arrow function".
*/

function sayMyName(name) {
    return `seu nome é ${name}`;
}
 const sum = (number1, number2) => number1 + number2;

 console.log(sayMyName('Marco Aurélio'));
 console.log(sum(2,3));