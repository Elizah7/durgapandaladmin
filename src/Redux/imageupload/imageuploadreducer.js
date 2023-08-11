
import * as types from "./imageuploadactiontype"

const imageinit ={
    isError:false,
    isLoading:false,
    userdata:"",
    error:""
}
export const ImageUploadreducer = (state = imageinit,action)=>{
    console.log(action.paylad)
    switch(action.type){
         case types.IMAGEUPLOADREQUEST:{
            return{
                ...state,
                isError:false,
                isloading:true,
            }
         }
         case types.IMAGEUPLOADSUCCESS:{
            return{
                ...state,
                isError:false,
                isloading:false,
                userdata:action.payload
            }
         }
         case types.IMAGEUPLOADFALIURE:{
            return{
                ...state,
                isError:true,
                isloading:false, 
                error:action.payload     
            }
         }
          default: return state
    }
   
}