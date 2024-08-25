import Character from '../Classes/Character.js';

describe('Character name validation', () => {
    const invalidNames = ['A', 'VeryLongName', 12345];

    test.each(invalidNames)('should throw an error if name is invalid: %p', (name) => {
        expect(() => {
            new Character(name, 'Bowman');
        }).toThrow("Имя должно быть строкой от 2 до 10 символов.");
    });

    test('should not throw an error for a valid name', () => {
        expect(() => {
            new Character('Robin', 'Bowman');
        }).not.toThrow();
    });
});
