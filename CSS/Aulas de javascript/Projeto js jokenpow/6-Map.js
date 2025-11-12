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
   
   const list = [
    {name: 'Marco', vip: true},
    {name: 'José', vip: false},
    {name: 'Maria', vip: true},
    {name: 'João', vip: true},
    {name: 'Ana', vip: false},
    {name: 'Pedro', vip: true},
    {name: 'Carla', vip: false}
   ]
  const newlist = list.map(user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
}
    return newUser
})
 const students = [
    {name: 'Marco', testGrade: 7},
    {name: 'José', testGrade: 4},
    {name: 'Maria', testGrade: 8},
    {name: 'João', testGrade: 6},
    {name: 'Ana', testGrade: 3},
    {name: 'Pedro', testGrade: 9},
    {name: 'Carla', testGrade: 5}
   ]
  const newstudent = students.map(student => {
    const newStudent = {
        name: student.name,
        finalResult: student.testGrade >= 5.5 ? 'Aprovado' : 'Reprovado'
        
}   
    return newStudent

  })
  console.log(newstudent)