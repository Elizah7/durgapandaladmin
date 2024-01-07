import axios from 'axios'
import React from 'react'
import { POST_CHATBOT_FAILURE,POST_CHATBOT_REQUEST,POST_CHATBOT_SUCCESS } from './actiontype'

export const postChatBotAction = (data) => (dispatch) => {

   const pandaltoken = JSON.parse(localStorage.getItem("pandaltoken")) || null
   const headers = {
      'content-type': 'multipart/form-data',
      "Authorization": pandaltoken
   }

   dispatch({ type: POST_CHATBOT_REQUEST })
   return axios.post(`http://localhost:8000/chatbot/query`, data, { headers: headers })
      .then(r => dispatch({ type: POST_CHATBOT_SUCCESS, payload: r.data }))
      .catch(err => dispatch({ type: POST_CHATBOT_FAILURE, payload: err.message }))
}
