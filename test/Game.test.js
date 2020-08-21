import { expect } from 'chai';

import { DEAD, ALIVE } from '../CellState';
import Game from '../Game';
import Cell from '../Cell';

const deadState = [
  [DEAD, DEAD, DEAD], 
  [DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD], 
];

describe('Game of Life', () => {

  it('should be initialized with a given state', () => {

    const game = new Game(deadState);
    const cellState = [
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)], 
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)]
    ];

    expect(game.state).to.deep.equal(cellState);
  });

  it('should retrieve a cell at a given row and colum', () => {
    const game = new Game(deadState);
    const cell = game.getCell(0, 0);
    expect(cell).to.be.instanceof(Cell)
    expect(cell.state).to.equal(deadState[0][0]);

    const gameState = [
      [ALIVE, DEAD],
      [DEAD, ALIVE],
    ]
    const newGame = new Game(gameState);
    const aliveCell = game.getCell(0, 0);
    expect(aliveCell).to.be.an.instanceof(Cell)
    expect(aliveCell.state).to.equal(gameState[0][0]);

    const deadCell = game.getCell(1, 1);
    expect(deadCell).to.be.an.instanceof(Cell)
    expect(deadCell.state).to.equal(gameState[1][1]);

  })

  it("should get the number of alive neighbors of a given cell", () => {
    const gameState = [
      [ALIVE, ALIVE, ALIVE],
      [ALIVE, ALIVE, ALIVE],
      [ALIVE, ALIVE, ALIVE]
    ];
    const game = new Game(gameState);
    const numOfAliveNeighbors = game.getNumOfAliveNeighbors(1, 1)
    expect(numOfAliveNeighbors).to.equal(8);
  });
});