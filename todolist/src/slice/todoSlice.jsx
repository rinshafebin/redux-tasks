import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: [],
}

const todoSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addtask: (state, action) => {
            state.tasks.push({ id: Date.now(), text: action.payload })
        },
        deletetask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },

        edittask: (state, action) => {
            const { id, text } = action.payload
            const task = state.tasks.find(task => task.id === id)
            if (task) task.text = text;
        }
    }

})

export const { addtask, deletetask, edittask } = todoSlice.actions;
export default todoSlice.reducer;
