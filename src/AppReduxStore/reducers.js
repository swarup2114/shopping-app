
import { combineReducers } from "redux";
const signupUsers={
    
    customers:[],
    currentUser:null
}

 const loginReducer = (state = signupUsers, action) => {
    switch (action.type) {
      case "SIGINUP":
        return{
          ...state,customers:[...state.customers,action.payload]
        }
        case "LOGIN":
          return{
            ...state,currentUser:action.payload
          }

      default:
        return state;
        }
  };
const productsData={
  loading:false,
  userData:null,
  error:"",
}
 const dataFetching=(state=productsData,action)=>{
  switch(action.type){
    case "FETCH_DATA_REQUEST":
      return{
        ...state,loading:true
      }
      case "FETCH_DATA_SUCCESS" :
      return{
        ...state,loading:false,userData:action.payload,error:""
      }
      case "FETCH_DATA_FAILED" :
        return{
          ...state,loading:false,error:action.payload,
                }
        default :
        return state
  }
}
 export  const rootReducer=combineReducers({
    users:loginReducer,
    productData:dataFetching
  })