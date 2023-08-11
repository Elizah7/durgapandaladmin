

import axios from "axios"
import * as types from "./imageuploadactiontype"

  export const imageupload = (id,data)=>(dispatch)=>{
    console.log(id,data)
          dispatch({type:types.IMAGEUPLOADREQUEST})
          return axios.patch(`http://localhost:8000/admin/upload/${id}`,data)
          .then(r=>dispatch({type:types.IMAGEUPLOADSUCCESS,payload:r.data}))
          .catch(err=>dispatch({type:types.IMAGEUPLOADFALIURE,payload:err.message}))
    }
   


