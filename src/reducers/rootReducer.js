
//get dimensions for grid based on window size
const width = Math.floor(window.innerWidth * 0.5);
const height = Math.floor(window.innerHeight * 0.7);
const rows = Math.floor(Math.floor(window.innerHeight * 0.7)/10);
const cols = Math.floor(Math.floor(window.innerWidth * 0.5)/10);
const gameGrid = Array(rows).fill().map(() => Array(cols).fill(true));

//declare initial state for reducer
const initialState = {
    dims:{
        cellSize: 10,
        width: width,
        height: height,
        rows: rows,
        cols: cols
    },
    gameGrid: gameGrid

}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default rootReducer


