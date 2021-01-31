const initialState = {
    page : "home",
    filter : "false",
    search : "",
    isLoggedIn : false,
    users : [],
};

const reducer = (state = initialState , action)=>{
    switch (action.type) {
        case "ADD_USER":
            return{
                ...state,
                users : [...state.users,action.payload]
            }
        default:
            return state;
    }
};

export default reducer;