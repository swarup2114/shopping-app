import axios from "axios";

//  export const FETCH_DATA_REQUEST="FETCH_DATA_REQUEST";
//  export const FETCH_DATA_SUCCESS="FETCH_DATA_SUCCESS";
//  export const FETCH_DATA_FAILED="FETCH_DATA_FAILED";

export  const fetchDataRequest=()=>({
    type:"FETCH_DATA_REQUEST"
 })
 export const fetchDataSucess=(data)=>({
    type:"FETCH_DATA_SUCCESS",
    payload:data
 }) 
 export const fetchDataFailed=(data)=>({
    type:"FETCH_DATA_FAILED",
    payload:data
 })
// thunk call....
 export const fetchData=()=>{
return async(dispatch) =>{
    dispatch(fetchDataRequest())
    try{
        let response=await axios.get("https://fakestoreapi.com/products");
        let result=response.data;
        dispatch(fetchDataSucess(result))
    }
    catch(errors){
        dispatch(fetchDataFailed(errors.message))
    }
}

 }