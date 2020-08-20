import { expect } from 'chai'; 
import CellState from '../CellState'

describe('CellState', () => {
  it('should have a ALIVE state', () => {
    expect(CellState.ALIVE).to.equal(1);
  })

  it('should have a DEAD state', () => {
    expect(CellState.DEAD).to.equal(0);
  })
})