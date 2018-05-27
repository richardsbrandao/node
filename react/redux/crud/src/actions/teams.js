import Actions from '../constants/actions'

function findBy(criteria) {
    return { type: Actions.FILTER_TEAMS, criteria }
}

function findAll() {
    return { type: Actions.FETCH_TEAM }
}

export { findBy, findAll }