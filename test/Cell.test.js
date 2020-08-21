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
    const zeroCell = new Cell(CellState.ALIVE)
    const zeroNextState = zeroCell.getNextState(0)
    expect(zeroNextState).to.equal(CellState.DEAD)
    
    const oneCell = new Cell(CellState.ALIVE)
    const nextState = oneCell.getNextState(1)
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

  it("should die with more than 3 neighbors", () => {
    const cell = new Cell(CellState.ALIVE)
    const fourNextState = cell.getNextState(4)
    expect(fourNextState).to.equal(CellState.DEAD);

    const ninetyCell = new Cell(CellState.ALIVE)
    const ninetyNextState = ninetyCell.getNextState(90)
    expect(ninetyNextState).to.equal(CellState.DEAD);
  })
})