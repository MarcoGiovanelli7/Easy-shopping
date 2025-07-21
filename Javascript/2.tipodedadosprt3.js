const name = "Marco Aurelio"
const age = 55  
const address = "minha rua,numero 7"

const Marco = {
    name: "Marco",
    age: 55,
    address: {
        street: "minha rua",
        number: "7",
        city: "Rio de Janeiro",
        state: "RJ",
        country: "Brasil"

    }   
}
console.log(Marco.address.city) // Acessando a propriedade 'street' do objeto 'address'
