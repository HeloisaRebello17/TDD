function sum (num1, num2) {
    if(isNaN(num1) || isNaN (num2)){
        throw "Não é número"
} 
return num1 + num2
}   
function sub (num1, num2){
    if(isNaN(num1) || isNaN (num2)){
        throw "Não é número"
}
return num1- num2
}
function mult (num1, num2){
    if(isNaN(num1) || isNaN (num2)){
        throw "Não é número"
}
return num1 * num2
}


module.exports = {
    sum,
    sub,
    mult
}