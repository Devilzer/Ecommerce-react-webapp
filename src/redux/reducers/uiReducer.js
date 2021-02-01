const initialState = {
    page : "home",
    filter : "false",
    search : "",
    isLoggedIn : false,
    users : [],
    user :{}
};

const reducer = (state = initialState , action)=>{
    switch (action.type) {
        case "ADD_USER":
            return{
                ...state,
                users : [...state.users,action.payload]
            };
        case "LOGIN_USER":
            return{
                ...state,
                isLoggedIn : true,
                user : action.payload
            };
        default:
            return state;
    }
};

export default reducer;