import React from "react";
import { connect } from 'react-redux';
import Smurf from './smurf'

const Smurfs = (props) => {
    return (
        <>
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