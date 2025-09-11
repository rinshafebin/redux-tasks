import { configureStore} from "@reduxjs/toolkit"
import co from "./store/counterSlice"

const store = configureStore({
    reducer : {
        c : co,
    }
})

export default store