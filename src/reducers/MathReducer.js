const initialState = {
    result: 1,
    lastValues: []
};
const MathReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'ADD':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [ ...state.lastValues, action.payload ]
            };
            break;
        case 'SUBSTRACT':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [ ...state.lastValues, action.payload ]
            };
            break;
    }
    return state;
};
export default MathReducer;