import React from "react";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurfs from './smurfs'
import AddSmurf from './addsmurf'

import "./App.css";

const App = (props) => {
 
    return (
      <div className="App">
        <button onClick={() => console.log(props.state)}>get state</button>
        <button onClick={props.getSmurfs}>fetch smurfs</button>
        <Smurfs />
        <AddSmurf />
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
