import CellState from "./CellState"

export default class Cell {
  constructor(state){
    this.state = state
  }

  getNextState(numNeighbors){
    if (this.state === CellState.ALIVE){
      if (numNeighbors === 2 || numNeighbors === 3) {
        return this.state;
      }
    } else if (numNeighbors === 3) {
        return CellState.ALIVE;
      }
    return CellState.DEAD;
  }
}