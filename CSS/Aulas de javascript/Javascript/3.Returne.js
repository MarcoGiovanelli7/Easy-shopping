const cart = [10, 20, 30, 40, 50, 60]
let finalValue = 0

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result

    calculateDiscount(250, 7)

}

cart.forEach(value => {

    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValue = finalValue + (value- discount)
    }else
    finalValue += value
});
console.log(`O valor final da compra é de R$${finalValue}`);

