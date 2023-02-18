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
    it('Operação de Divisão', () => {
        let resultado = calculadora.div(4, 2);
        expect(resultado).toEqual(2)

        resultado = calculadora.div(6, 2);
        expect(resultado).toEqual(3)

        resultado = calculadora.div(8, 2);
        expect(resultado).toEqual(4)

        resultado = calculadora.div(10, 2);
        expect(resultado).toEqual(5)

        resultado = calculadora.div(12, 2);
        expect(resultado).toEqual(6)

        resultado = calculadora.div(14, 2);
        expect(resultado).toEqual(7)

        resultado = calculadora.div(16, 2);
        expect(resultado).toEqual(8)

        resultado = calculadora.div(18, 2);
        expect(resultado).toEqual(9)

        resultado = calculadora.div(20, 2);
        expect(resultado).toEqual(10)
    })
    it('Operação de Raiz', () => {
        let resultado = calculadora.raiz(4);
        expect(resultado).toEqual(2)

        resultado = calculadora.raiz(9);
        expect(resultado).toEqual(3)

        resultado = calculadora.raiz(16);
        expect(resultado).toEqual(4)

        resultado = calculadora.raiz(25);
        expect(resultado).toEqual(5)
    })
    it('Operação de Potência', () => {
        let resultado = calculadora.poten(2,2);
        expect(resultado).toEqual(4)

        resultado = calculadora.poten(2,3);
        expect(resultado).toEqual(8)

        resultado = calculadora.poten(2,4);
        expect(resultado).toEqual(16)

        resultado = calculadora.poten(2,5);
        expect(resultado).toEqual(32)

        resultado = calculadora.poten(2,6);
        expect(resultado).toEqual(64)

        resultado = calculadora.poten(3,2);
        expect(resultado).toEqual(9)

        resultado = calculadora.poten(3,3);
        expect(resultado).toEqual(27)

        resultado = calculadora.poten(3,4);
        expect(resultado).toEqual(81)

        resultado = calculadora.poten(3,5);
        expect(resultado).toEqual(243)

        
    })
})