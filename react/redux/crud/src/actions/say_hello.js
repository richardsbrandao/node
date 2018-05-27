import Actions from '../constants/actions'

function sayHello(name) {
    return {
        type: Actions.SAY_HELLO,
        name
    }
}

export { sayHello }