import React from "react";
import { connect } from 'react-redux';
import Smurf from './smurf'

const Smurfs = (props) => {
    console.log(props.state)
    return (
        <>
        <h1>Smurfs:</h1>
        {props.state.SMURFS.map((smurf) => {
            return <Smurf key={smurf.id} details={smurf} />
        })}
        </>
    )
}

const mapStateToProps = state => ({
    state: state
  });
  
  export default connect(
    mapStateToProps,
    {}
  )(Smurfs);