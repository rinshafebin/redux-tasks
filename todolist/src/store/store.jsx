import {configureStore}from '@reduxjs/toolkit'
import todoSlice from "../slice/todoSlice"

const store = configureStore({
    reducer:{
        tasks: todoSlice, 
    }
})

export default store