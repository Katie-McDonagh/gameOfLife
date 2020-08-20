import CellState from "./CellState"

export default class Cell {
  constructor(state){
    this.state = state
  }

  getNextState(numNeighbors){
    if (numNeighbors < 2) {
      return CellState.DEAD
    }
    return CellState.ALIVE
  }
}