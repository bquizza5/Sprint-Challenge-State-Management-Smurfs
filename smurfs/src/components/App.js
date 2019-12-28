import React from "react";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurfs from './smurfs'
import AddSmurf from './addsmurf'

import "./App.css";

const App = (props) => {
 
    return (
      <div className="App">
        <button onClick={() => console.log(props.state)}>console.log(state)</button>
        <button onClick={props.getSmurfs}>fetch smurfs</button>
        <AddSmurf />
        <h1>Smurfs:</h1>
        <div className='smurfs'>
          <Smurfs />
        </div>
      </div>
    );
  }


const mapStateToProps = state => ({
  state: state
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
