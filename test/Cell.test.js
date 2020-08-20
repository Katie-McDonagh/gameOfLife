import { expect } from 'chai';
import CellState from '../CellState';
import Cell from '../Cell'

describe('Cell', () => {
  it('should be initialized with a cellState', () => {
    const cell = new Cell(CellState.ALIVE);
    expect(cell.state).to.equal(CellState.ALIVE);
  });
});