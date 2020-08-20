import CellState from "./CellState"

export default class Cell {
  constructor(state){
    this.state = state
  }

  getNextState(numNeighbors){
    
   if (numNeighbors === 2 || numNeighbors === 3) {
      return CellState.ALIVE
    }
    return CellState.DEAD
  }
}