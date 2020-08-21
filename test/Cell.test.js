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

  it("should throw an error if not initialized with a CellState", () => {
    expect(() => {
      const cell = new Cell(undefined);
    }).to.throw();
  });

  it("should die if it has fewer than 2 live neighbors", () => {
    const cell = new Cell(CellState.ALIVE)
    const nextStateWith0Neighbors = cell.getNextState(0)
    expect(nextStateWith0Neighbors).to.equal(CellState.DEAD)
    
    const nextStateWith1Neighbor = cell.getNextState(1)
    expect(nextStateWith1Neighbor).to.equal(CellState.DEAD)
  });

  it("should stay dead if it has fewer than 2 neighbors", () => {
    const cell = new Cell(CellState.DEAD)
    const nextStateWith0Neighbors = cell.getNextState(0)
    expect(nextStateWith0Neighbors).to.equal(CellState.DEAD)
    
    const nextStateWith1Neighbor = cell.getNextState(1)
    expect(nextStateWith1Neighbor).to.equal(CellState.DEAD)
  })

  it("should live with 2 or 3 live neighbors", () => {
    const cell = new Cell(CellState.ALIVE)
    const nextStateWith2Neighbors = cell.getNextState(2)
    expect(nextStateWith2Neighbors).to.equal(CellState.ALIVE)

    const nextStateWith3Neighbors = cell.getNextState(3)
    expect(nextStateWith3Neighbors).to.equal(CellState.ALIVE)
  })

  it("should die with more than 3 neighbors", () => {
    const cell = new Cell(CellState.ALIVE)
    const nextStateWith4Neighbors = cell.getNextState(4)
    expect(nextStateWith4Neighbors).to.equal(CellState.DEAD);

    const nextStateWith90Neighbors = cell.getNextState(90)
    expect(nextStateWith90Neighbors).to.equal(CellState.DEAD);
  })

  it("should stay dead with more than 3 neighbors", () => {
    const cell = new Cell(CellState.DEAD)
    const nextStateWith4Neighbors = cell.getNextState(4)
    expect(nextStateWith4Neighbors).to.equal(CellState.DEAD)

    const nextStateWith90Neighbors = cell.getNextState(90)
    expect(nextStateWith90Neighbors).to.equal(CellState.DEAD);
  })

  it("should come alive with exactly 3 neighbors", () => {
    const cell = new Cell(CellState.DEAD)
    const nextStateWith3Neighbors = cell.getNextState(3)
      expect(nextStateWith3Neighbors).to.equal(CellState.ALIVE)
  })
})