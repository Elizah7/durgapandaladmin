import axios from 'axios'
import React from 'react'
import { GET_SINGLE_USER_FAILURE, GET_SINGLE_USER_REQUEST, GET_SINGLE_USER_SUCCESS } from './getsingleuseractiontype'

const getsingleuseraction = ()=> (dispatch)=> {
  
    const pandaltoken = JSON.parse(localStorage.getItem("pandaltoken"))||null
   console.log(pandaltoken)
    dispatch({type:GET_SINGLE_USER_REQUEST})
    return axios.get(`http://localhost:8000/admin/`,{
        headers:{
           "Content-type":"application/json",
           "Authorization":pandaltoken
        }
    })
    .then(r=>dispatch({type:GET_SINGLE_USER_SUCCESS,payload:r.data}))
    .catch(err=>dispatch({type:GET_SINGLE_USER_FAILURE,payload:err.message}))
}

export default getsingleuseraction
