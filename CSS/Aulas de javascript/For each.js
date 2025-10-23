/*

    For Each(item, index, array)

*/

const  users = [
    {name: 'João', age: 25,Number: '(19) 94343-3434'},
    {name: 'Ana', age: 30,Number: '(21) 91234-5678'},
    {name: 'Carlos', age: 28,Number: '(22) 98765-4321'},
    {name: 'Marco', age: 27,Number: '(31) 93456-7890'},
]


users.forEach( function (item,index) {
    console.log(`${index +1} Nome: ${item.name} Age: ${item.age} Number: ${item.Number}`);


    
})