import { expect } from 'chai'; 
import CellState from '..CellState'

describe('CellState', () => {
  it('should have a ALIVE state', () => {
    expect(CellState.ALIVE).toEqual(1);
  })
})