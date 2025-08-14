import { expect } from 'chai';
import { suma } from '../src/suma';

describe('Función suma', () => {
    it('suma dos números positivos', () => {
        expect(suma(2, 3)).to.equal(5);
    });

    it('suma un número positivo y uno negativo', () => {
        expect(suma(10, -3)).to.equal(7);
    });

    it('suma dos ceros', () => {
        expect(suma(0, 0)).to.equal(0);
    });
});
