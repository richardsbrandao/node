import Actions from '../constants/actions'
import Team from '../models/team'

function handleAction(state, action) {
    switch (action.type) {
        case Actions.FILTER_TEAMS:
            return {teams: Team.findBy(action.criteria)}
        case Actions.FETCH_DATA:
            return {teams: Team.findAll()}
        default:
            return state;
    }
}

export default (state = {}, action) => {
    return Object.assign({}, state, handleAction(state, action))
}