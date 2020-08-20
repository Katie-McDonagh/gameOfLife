import { expect } from 'chai';
import CellState from '../CellState';
import Cell from '../Cell';

describe("Cell", () => {
  it("is initiated with a cellState", () => {
    const aliveCell = new Cell(CellState.ALIVE);
    expect(aliveCell.state).to.equal(CellState.ALIVE)

    const deadCell = new Cell(CellState.DEAD)
    expect(deadCell.state).to.equal(CellState.DEAD)
  });

  it("should die if it has fewer than 2 live neighbors", () => {
    const cell = new Cell(CellState.ALIVE)
    const nextState = cell.getNextState(1)
    expect(nextState).to.equal(CellState.DEAD)
  });

  it("should live with 2 or 3 live neighbors", () => {
    const cell = new Cell(CellState.ALIVE)
    const nextState = cell.getNextState(2)
    expect(nextState).to.equal(CellState.ALIVE)

    const threeNeighborCell = new Cell(CellState.ALIVE)
    const threeNextState = threeNeighborCell.getNextState(3)
    expect(threeNextState).to.equal(CellState.ALIVE)
  })
})