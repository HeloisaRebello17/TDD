const { describe, expect, it } = require('@jest/globals')
const calculadora = require('../src/operacoes')

describe('Teste da calculadora', () => {
    it('Operação de soma', () => {
        let resultado = calculadora.sum(1, 2);
        expect(resultado).toEqual(3)

        resultado = calculadora.sum(-1, 2);
        expect(resultado).toEqual(1)

        resultado = calculadora.sum(0, 2);
        expect(resultado).toEqual(2)

        resultado = () => calculadora.sum("a", 2);
        expect(resultado).toThrow('Não é número');

        resultado = () => calculadora.sum(2, "a");
        expect(resultado).toThrow('Não é número');

       
    })
    it('Operação de Sub', () => {
        let resultado = calculadora.sub(1, 2);
        expect(resultado).toEqual(-1)

        resultado = calculadora.sub(3, 2);
        expect(resultado).toEqual(1)

        resultado = calculadora.sub(4, 2);
        expect(resultado).toEqual(2)

        resultado = calculadora.sub(5, 2);
        expect(resultado).toEqual(3)

        resultado = calculadora.sub(6, 2);
        expect(resultado).toEqual(4) 

    }
    )
    it('Operação de Mult', () => {
        let resultado = calculadora.mult(1, 2);
        expect(resultado).toEqual(2)

        resultado = calculadora.mult(3, 2);
        expect(resultado).toEqual(6)

        resultado = calculadora.mult(4, 2);
        expect(resultado).toEqual(8)

        resultado = calculadora.mult(5, 2);
        expect(resultado).toEqual(10)

        resultado = calculadora.mult(6, 2);
        expect(resultado).toEqual(12)

        resultado = calculadora.mult(7, 2);
        expect(resultado).toEqual(14)

        resultado = calculadora.mult(8, 2);
        expect(resultado).toEqual(16)

        resultado = calculadora.mult(9, 2);
        expect(resultado).toEqual(18)
})
})