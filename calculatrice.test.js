const Calculatrice = require('./index');

describe('Calculatrice', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculatrice();
    });

    test('addition de 1 + 2 doit retourner 3', () => {
        expect(calc.add(1, 2)).toBe(3);
    });

    test('soustraction de 5 - 2 doit retourner 3', () => {
        expect(calc.sub(5, 2)).toBe(3);
    });

    test('multiplication de 3 * 4 doit retourner 12', () => {
        expect(calc.mul(3, 4)).toBe(12);
    });

    test('division de 10 / 2 doit retourner 5', () => {
        expect(calc.div(10, 2)).toBe(5);
    });

    test('division par 0 doit lancer une erreur', () => {
        expect(() => calc.div(10, 0)).toThrow("Division par zero non autorisé.");
    });
});
