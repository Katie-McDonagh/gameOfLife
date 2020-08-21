import { expect } from 'chai';

describe('Game of Life', () => {
  it('should be initialized with a given state', () => {
    const state = [
      [DEAD, DEAD, DEAD], 
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD], 
    ];
    const game = new Game(state);
    const cellState = [
      [new cell(DEAD), new cell(DEAD), new cell(DEAD)], 
      [new cell(DEAD), new cell(DEAD), new cell(DEAD)],
      [new cell(DEAD), new cell(DEAD), new cell(DEAD)]
    ];

    expect(game.state).to.deep.equal(state);
  });
});