import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const fetchRandomNumber = createAsyncThunk(
    'counter/fetchRandomNumber',
    async () => {
        const res = await fetch('https://api.agify.io?name=michael');
        const data = await res.json()
        return data[0]
    }
)



const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
        reset: (state) => { state.count = 0 }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomNumber.pending, (state) => { state.status = "loading" })
            .addCase(fetchRandomNumber.fulfilled, (state, action) => {
                state.count = action.payload,
                    state.status = "success"
            })
            .addCase(fetchRandomNumber.rejected, (state) => { state.status = "failed" })

    }
})


export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;