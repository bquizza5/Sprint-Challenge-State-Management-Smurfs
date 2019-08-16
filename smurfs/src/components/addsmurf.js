import React, { useState } from "react";
import { connect } from 'react-redux';
import { addSmurf } from '../actions';


const AddSmurf = (props) => {
    const [ newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
    })

    const changeHandler = (event) => {
        // console.log(event.target)
        setNewSmurf({...newSmurf, [event.target.name]: event.target.value})
        console.log(newSmurf)

    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.addSmurf(newSmurf)
        setNewSmurf({
            name: '',
            age: '',
            height: '', 
        })


    }

    return (
        <form onSubmit={submitHandler}>
            <input name='name' onChange={(event) => changeHandler(event)} value={newSmurf.name} />
            <input name='age' onChange={(event) => changeHandler(event)} value={newSmurf.age} />
            <input name='height' onChange={(event) => changeHandler(event)} value={newSmurf.height} />
            <button type='submit'>Add Smurf</button>
        </form>
    )
}

const mapStateToProps = state => ({
    state: state
  });
  
  export default connect(
    mapStateToProps,
    { addSmurf }
  )(AddSmurf);