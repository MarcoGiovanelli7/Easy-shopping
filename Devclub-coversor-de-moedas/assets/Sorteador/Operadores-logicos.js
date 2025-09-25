/*

Operadores lógicos 

&& -> E (AND)->Pesssoa Exigente/obediente
   true && true = true
    true && false = false
    false && true = false

|| -> OU (OR) -> Tanto faz/filho expertinho
    true || true = true
    true || false = true
    false ||false = false
    
! -> Negação
    !true = false
    !false = true    
*/
 const digitarASenha = true
 const digitarOToken = true
 const numeroDaConta = true

 if ( !(digitarASenha && digitarOToken && numeroDaConta)){
    console.log("Acesso permitido")
    } else {
        console.log("Acesso negado")
        }