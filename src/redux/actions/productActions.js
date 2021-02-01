import axios from "axios";

export const fetchProducts = ()=>async(dispatch)=>{
    try {
        const {data} = await axios.get("https://my-json-server.typicode.com/Devilzer/Ecommerce-react-webapp/products");
        dispatch({
            type : "SET_PRODUCTS",
            payload : data
        });
    } catch (error) {
        console.log(error);
    }
};