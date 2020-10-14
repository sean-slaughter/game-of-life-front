import React from 'react';
import './App.css';
import CanvasContainer from './containers/CanvasContainer'
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div className="App">
      <Grid container justify="center" alignItems="center">
        <CanvasContainer/>
      </Grid>
    </div>
  );
}

export default App;
