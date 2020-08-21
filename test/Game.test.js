import { expect } from 'chai';

import CellState from '../CellState';
import Game from '../Game';
import Cell from '../Cell';

const { DEAD, ALIVE } = CellState;

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

 xit('should retrieve a cell at a given row and colum', () => {
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
    expect(deadCell.state).to.equal(gameState[0][1]);

  })

  it("should get the number of alive neighbors of a given cell", () => {
    const gameState = [
      [ALIVE, ALIVE, ALIVE],
      [ALIVE, ALIVE, ALIVE],
      [ALIVE, ALIVE, ALIVE]
    ];
    const game = new Game(gameState);
    const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 1)
    expect(numAliveNeighbors).to.equal(8);
  });

  it("should get the number of alive neighbors above a given cell", () => {
    const gameState = [
      [ALIVE, ALIVE, ALIVE],
      [DEAD, ALIVE, DEAD],
      [DEAD, DEAD, DEAD]
    ];
    const game = new Game(gameState);
    const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 1)
    expect(numAliveNeighbors).to.equal(3);
  });

  it("should get the number of alive neighbors below a given cell", () => {
    const gameState = [
      [DEAD, DEAD, DEAD],
      [DEAD, ALIVE, DEAD],
      [ALIVE, ALIVE, ALIVE]
    ];
    const game = new Game(gameState);
    const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 1)
    expect(numAliveNeighbors).to.equal(3);
  });

  it("should get the number of alive neighbors next to  a given cell", () => {
    const gameState = [
      [DEAD, DEAD, DEAD],
      [ALIVE, ALIVE, ALIVE],
      [DEAD, DEAD, DEAD],

    ];
    const game = new Game(gameState);
    const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 1)
    expect(numAliveNeighbors).to.equal(2);
  });

  xit("should get the number of alive neighbors for cell in the top row", () => {
    const gameState = [
      [ALIVE, ALIVE, ALIVE],
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],

    ];
    const game = new Game(gameState);
    const numAliveNeighbors = game.getNumOfAliveNeighbors(0, 1);
    expect(numAliveNeighbors).to.equal(2);
  })

  it("should get the number of alive neighbors for cell in the first colum", () => {
    const gameState = [
      [ALIVE, ALIVE, DEAD],
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],

    ];
    const game = new Game(gameState)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(0, 0);
    expect(numAliveNeighbors).to.equal(1);
  });

  it("should get the number of alive neighbors for cell in the first colum", () => {
    const gameState = [
      [DEAD, DEAD, DEAD],
      [ALIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD],

    ];
    const game = new Game(gameState)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(1, 0);
    expect(numAliveNeighbors).to.equal(0);
  });
  it("should get the number of alive neighbors for cell in the bottom row", () => {
    const gameState = [
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
      [ALIVE, ALIVE, ALIVE],

    ];
    const game = new Game(gameState)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(2, 1);
    expect(numAliveNeighbors).to.equal(2);
  });

  it("should get the number of alive neighbors for cell in the far right row", () => {
    const gameState = [
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, ALIVE],
      [DEAD, DEAD, DEAD],

    ];
    const game = new Game(gameState)
    const numAliveNeighbors = game.getNumOfAliveNeighbors(2, 2);
    expect(numAliveNeighbors).to.equal(0);
  });

});