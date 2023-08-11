
import axios from "axios";
import { GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAILURE } from "./actionType";

const getdataRequest = ()=>{
    return {type:GET_DATA_REQUEST }
}
const getdataSuccess = (payload)=>{
    return {type:GET_DATA_SUCCESS,payload }
}
const getdataFailure = (payload)=>{
    return {type:GET_DATA_FAILURE,payload }
}


export const getImagesAction =()=> (dispatch)=>{
    const pandaltoken = JSON.parse(localStorage.getItem("pandaltoken")) || null
    const headers = {
       'content-type': 'multipart/form-data',
       "Authorization": pandaltoken
    }
    dispatch(getdataRequest())
    return axios.get(`http://localhost:8000/images`, { headers: headers })
     .then(res=>dispatch(getdataSuccess(res.data)))
     .catch((err)=>dispatch(getdataFailure(err)))
} 
