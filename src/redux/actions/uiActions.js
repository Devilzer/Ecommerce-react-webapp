import { showNotification } from "../../config/noty";

export const addUser = (user)=>{

    showNotification("Registered Successfully.");
    return{
        type : "ADD_USER",
        payload : user
    };
};

export const loginUser = (user)=>{
    showNotification("Login Success.");
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

export const userLogOut = ()=>{
    showNotification("Logout Success.");
    return{
        type :"LOGOUT_USER"
    };
};