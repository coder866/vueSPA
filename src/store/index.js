import { createStore } from 'vuex'
import * as auth from './modules/Auth'
import * as user from './modules/User'
import * as message from './modules/Mesages'
const store = createStore({
    modules: {
        auth,
        user,
        message,
    },
})

export default store
