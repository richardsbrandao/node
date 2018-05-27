import { combineReducers } from 'redux'
import teams from './teams_reducer'
import hello from './hello_reducer'

const reducers = combineReducers({
    teams,
    hello
})

export default reducers