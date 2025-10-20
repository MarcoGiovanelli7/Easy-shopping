/*
   Estrtutura de repetição -LOOP
        -FOR IN
*/

const users = { name: 'Marco', age: 55, street: 'Rua dos Devs' };

//users.name -> Marco
//users['name']  -> Marco

for ( const key in users) {
       console.log(key + " : " + users[key]);
}

