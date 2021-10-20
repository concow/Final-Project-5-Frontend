import {createStore} from 'redux'

const defaultStore = {stock : ""}

function reducer(store = defaultStore, action) {

    switch (action.type) {
        case "SETSTOCK" :
            return{...store, stock : action.payload}
        default :
        return store
    }
}

export const store = createStore(reducer, defaultStore)