import dispatcher from '../dispatcher'

export function create(name) {
    dispatcher.dispatch({
        type: 'CREATE',
        name
    })
}

export function remove(id) {
    dispatcher.dispatch({
        type: 'REMOVE',
        id
    })
}

export function update(newEpic) {
    dispatcher.dispatch({
        type: 'UPDATE',
        newEpic
    })
}