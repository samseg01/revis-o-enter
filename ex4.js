var num1 = prompt();
var num2 = prompt();

console.log(maximo(num1,num2));

function maximo(numero1, numero2) {
    if(numero1>numero2){
        return "O " + numero1 + " é o maior número";
    }else{
        return "O " + numero2 + " é o maior número";
    }
}