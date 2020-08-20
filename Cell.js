export default class Cell {
  constructor(state){
    this.state = state
  }

  getNextState(numNeighbors){
    if (numNeighbors < 2) {
      return 0
    }
  }
}