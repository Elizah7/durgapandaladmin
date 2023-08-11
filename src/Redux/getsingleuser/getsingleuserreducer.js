import React from 'react'
import { GET_SINGLE_USER_FAILURE, GET_SINGLE_USER_REQUEST, GET_SINGLE_USER_SUCCESS } from './getsingleuseractiontype'

const init ={
    isError:false,
    isLoading:false,
    userdata:"",
    error:""
}
const getsingleuserreducer = (state = init,{type,payload} ) => {
    switch(type){
         case GET_SINGLE_USER_REQUEST:{
            return{
                ...state,
                isError:false,
                isloading:true,
            }
         }
         case GET_SINGLE_USER_SUCCESS:{
            return{
                ...state,
                isError:false,
                isloading:false,
                userdata:payload
            }
         }
         case GET_SINGLE_USER_FAILURE:{
            return{
                ...state,
                isError:true,
                isloading:false, 
                error:payload     
            }
         }
          default: return state
    }
}

export default getsingleuserreducer
