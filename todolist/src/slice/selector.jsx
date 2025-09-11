import {createSelector} from "reselect"

export const selectTasks =state.tasks.tasks;

export const selectTasksCount = createSelector(
    [selectTasks],
    tasks =>tasks.length
);