function sum(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw "Não é número"
    }
    return num1 + num2
}
function sub(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw "Não é número"
    }
    return num1 - num2
}
function mult(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw "Não é número"
    }
    return num1 * num2
}
function div(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw "Não é número"
    }
    return num1 / num2
}

function raiz(num1) {
    if (isNaN(num1) < 0) {
        throw "Não é número"
    }
    return Math.sqrt(num1)
}

function poten(num1, num2) {
    if (isNaN(num1) < 0) {
        throw "Não é número"
    }
    return Math.pow(num1, num2)
}





module.exports = {
    sum,
    sub,
    mult,
    div,
    raiz,
    poten
}