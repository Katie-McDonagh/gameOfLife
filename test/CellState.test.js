import { expect } from 'chai';
import CellState from '../CellState'

describe("CellState", () => {

  it("allows a CellState to be ALIVE",()  => {
    expect(CellState.ALIVE).to.equal(1);
  });
  it("allows a CellState to be DEAD",()  => {
    expect(CellState.DEAD).to.equal(0);
  });

});