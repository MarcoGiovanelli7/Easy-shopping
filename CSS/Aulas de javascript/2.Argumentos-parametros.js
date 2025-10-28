/* Functions / funções
   
função void (vazia), que não retorna nada
Função return, que retorna um valor pra quem chamou a função
*/

/*function sum(value, value2 ) { //void
    const result = value + value2
    return result
}

function sub(value, value2) {
  console.log(value - value2)
}  

const myresult = sum(10, 5)
console.log(myresult + " resultado") //undefined*/



/*
 cauculadora desconto
 todos os produtos acima de R$ 30,00.tem 10% de desconto
 */

 const cart = [10, 20, 30, 40, 50, 60]
    let finalValue = 0

    function calculateDiscount(price, discount) {
        const result = (price * discount) /100
        console.log(result)

    calculateDiscount(250,7)

    } 

    cart.forEach( value => {
        finalValue += value
});




    

    
 