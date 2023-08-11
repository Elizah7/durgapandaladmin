

import axios from "axios"
import { ENTER_NEW_PASSWORD_FAILURE, ENTER_NEW_PASSWORD_REQUEST, ENTER_NEW_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, GET_VALID_USER_FAILURE, GET_VALID_USER_REQUEST, GET_VALID_USER_SUCCESS } from "./forgotpasswordactiontype"


export const forgot_password_action = (data) => (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST })
  return axios.post(`http://localhost:8000/reset_password`, data)
    .then(r => dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: r.data }))
    .catch(err => dispatch({ type: FORGOT_PASSWORD_FAILURE, payload: err.message }))
}

export const get_valid_user_action = (id, token) => (dispatch) => {
  dispatch({ type: GET_VALID_USER_REQUEST })
  console.log(id,token)
  return axios.get(`http://localhost:8000/reset_password/valid/${id}/${token}`)
    .then(r => dispatch({ type: GET_VALID_USER_SUCCESS, payload: r.data }))
    .catch(err => dispatch({ type: GET_VALID_USER_FAILURE, payload: err.message }))
}

export const enter_new_password = (id, token, data) => (dispatch) => {
  dispatch({ type: ENTER_NEW_PASSWORD_REQUEST })
  return axios.post(`http://localhost:8000/reset_password/${id}/${token}`, data)
    .then(r => dispatch({ type: ENTER_NEW_PASSWORD_SUCCESS, payload: r.data }))
    .catch(err => dispatch({ type: ENTER_NEW_PASSWORD_FAILURE, payload: err.message }))
}

