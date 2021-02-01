export const addUser = (user)=>{
    return{
        type : "ADD_USER",
        payload : user
    };
};

export const loginUser = (user)=>{
    return{
        type:"LOGIN_USER",
        payload:user
    };
};

export const updateSearch = (value)=>{
    return{
        type:"UPDATE_SEARCH",
        payload : value
    };
};

export const setFilter = (value)=>{
    return{
        type : "SET_FILTER",
        payload :  value
    };
};

export const setPage = (value)=>{
    return{
        type:"SET_PAGE",
        payload : value
    };
};