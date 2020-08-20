import { expect } from 'chai';
import CellState from '../CellState';

describe('Cell', () => {
  it('should be initialized with a cellState', () => {
    const cell = new CellState(CellState.ALIVE);
    expect(cell.state).to.equal(CellState.ALIVE);
  });
});