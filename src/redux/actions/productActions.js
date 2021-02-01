import axios from "axios";
// import { showNotification } from "../../config/noty";

export const fetchProducts = ()=>async(dispatch)=>{
    try {
        const {data} = await axios.get("https://my-json-server.typicode.com/Devilzer/Ecommerce-react-webapp/products");
        console.log(data);
        
        dispatch({
            type : "SET_PRODUCTS",
            payload : data
        });
    } catch (error) {
        console.log(error);
    }
};