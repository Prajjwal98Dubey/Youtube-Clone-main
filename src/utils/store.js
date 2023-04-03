
import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import chatSlice from "./chatSlice"

const store=configureStore({
    reducer:{
        app:appSlice,
        Chat:chatSlice
    }
})

export default store