const initialUserState = {name:"guest"}

function userReducer(state=initialUserState,action){
    switch(action.type){
        case 'setName':
            return {name :action.payload}
        default:
            return state
    }
}

export default userReducer;