import Character from '../Classes/Character.js';
import Bowerman from '../Classes/Bowerman.js'

test('LevelUp validation', () => {
    const bowman = new Bowerman('Azazel');
    const bowman_levelUp = bowman.levelUp()
    const correct = {
        name: 'Azazel',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    };

    expect(bowman_levelUp).toEqual(correct);
});