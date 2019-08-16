import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL,
    POST_SMURFS_START,
    POST_SMURFS_SUCCESS,
    POST_SMURFS_FAIL
  } from '../actions';

  const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_SMURFS_START :
            console.log('FETCH_SMURFS_START');
            return {...state, isFetching: true, error: ''}
        case FETCH_SMURFS_SUCCESS :
            console.log('FETCH_SMURFS_SUCCESS');
            return {
                ...state, 
                isFetching: false,  
                SMURFS:[ ...state.SMURFS, ...action.payload]}
        case FETCH_SMURFS_FAIL :
            console.log('FETCH_SMURFS_FAIL', action.payload)
            return {...state, error: action.payload}
        case POST_SMURFS_START :
            return {...state, isPosting: true, error: ''}
        case POST_SMURFS_SUCCESS:
            return {
                ...state, 
                isFetching: false,  
                SMURFS:[ ...state.SMURFS, ...action.payload.results]}
        case POST_SMURFS_FAIL :
            return {...state, error: action.payload}
        default: 
            return state
    }
}


const initialState = {
    isPosting: false,
    isFetching: false,
    error: '',
    SMURFS: []
};

export default reducer;