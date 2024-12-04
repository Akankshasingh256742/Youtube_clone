import {configureStore} from '@reduxjs/toolkit'
import navslice from './navslice'
import searchslice from './searchslice'
import searchfetch from './searchfetch'





const store = configureStore({
    reducer:{
        app: navslice,
        search: searchslice,
        result: searchfetch,
    },
})

export default store