import axios from 'axios'
import React from 'react'
import { POST_IMAGE_FAILURE, POST_IMAGE_REQUEST, POST_IMAGE_SUCCESS } from './postimageactiontype'

const postimageaction = (data) => (dispatch) => {

   const pandaltoken = JSON.parse(localStorage.getItem("pandaltoken")) || null
   const headers = {
      'content-type': 'multipart/form-data',
      "Authorization": pandaltoken
   }

   dispatch({ type: POST_IMAGE_REQUEST })
   return axios.post(`http://localhost:8000/images/upload`, data, { headers: headers })
      .then(r => dispatch({ type: POST_IMAGE_SUCCESS, payload: r.data }))
      .catch(err => dispatch({ type: POST_IMAGE_FAILURE, payload: err.message }))
}
export const postvideoaction = (data) => (dispatch) => {

   const pandaltoken = JSON.parse(localStorage.getItem("pandaltoken")) || null
   const headers = {
      'content-type': 'multipart/form-data',
      "Authorization": pandaltoken
   }

   dispatch({ type: POST_IMAGE_REQUEST })
   return axios.post(`http://localhost:8000/videos/upload`, data, { headers: headers })
      .then(r => dispatch({ type: POST_IMAGE_SUCCESS, payload: r.data }))
      .catch(err => dispatch({ type: POST_IMAGE_FAILURE, payload: err.message }))
}

export default postimageaction
