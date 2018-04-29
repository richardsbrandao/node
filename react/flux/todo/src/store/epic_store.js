import { EventEmitter } from "events"
import dispatcher from "../dispatcher";

class EpicStore extends EventEmitter {
    constructor() {
        super()
        this.sequence = 4
        this.epics = [
            {id: 1, name: 'Epic 1'},
            {id: 2, name: 'Epic 2'},
            {id: 3, name: 'Epic 3'}
        ]
    }

    create(name) {
        this.epics.push({id: this.sequence++, name: name})
        this.emit('fetch')
    }

    remove(id) {
        this.epics = this.epics.filter((epic) => {
            return epic.id !== id
        })
        this.emit('fetch')
    }

    update(newEpic) {
        this.epics = this.epics.map((epic) => {
            return epic.id !== newEpic.id ? epic : newEpic  
        })
        this.emit('fetch')
    }

    findAll() {
        return this.epics
    }

    handleActions(action) {
        switch(action.type) {
            case 'CREATE': 
                return this.create(action.name)
            case 'REMOVE':
                return this.remove(action.id)
            case 'UPDATE':
                return this.update(action.newEpic)
            default:
                return null;
        }
    }
}

const epicStore = new EpicStore()
dispatcher.register(epicStore.handleActions.bind(epicStore))
export default epicStore