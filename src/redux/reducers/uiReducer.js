const initialState = {
    page : "home",
    filter : "false",
    search : "",
    isLoggedIn : false
};

const reducer = (state = initialState , action)=>{
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;