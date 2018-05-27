import Actions from '../constants/actions'

function handleAction(state, action) {
    switch (action.type) {
        case Actions.SAY_HELLO:
            return {name: action.name.toUpperCase()}
        default:
            return state;
    }
}

export default (state = {}, action) => {
    return Object.assign({}, state, handleAction(state, action))
}