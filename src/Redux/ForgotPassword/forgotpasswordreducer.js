
import { FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, GET_VALID_USER_FAILURE, GET_VALID_USER_REQUEST, GET_VALID_USER_SUCCESS } from "./forgotpasswordactiontype"


const initlogin = {
    isError: false,
    isLoading: false,
    data: ""
}
export const forgot_pass_reducer = (state = initlogin, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                isError: false,
                isloading: true,
            }
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                isError: false,
                isloading: false,
                data: action.payload
            }
        }
        case FORGOT_PASSWORD_FAILURE: {
            return {
                ...state,
                isError: true,
                isloading: false,
                error: action.payload
            }
        }
        default: return state
    }

}



const initlogin2 = {
    isError: false,
    isLoading: false,
    data: ""
}
export const enter_new_password_reducer = (state = initlogin2, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                isError: false,
                isloading: true,
            }
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                isError: false,
                isloading: false,
                data: action.payload
            }
        }
        case FORGOT_PASSWORD_FAILURE: {
            return {
                ...state,
                isError: true,
                isloading: false,
                error: action.payload
            }
        }
        default: return state
    }

}


const initlogin3 = {
    isError: false,
    isLoading: false,
    data: ""
}
export const get_valid_user_reducer = (state = initlogin3, action) => {
    switch (action.type) {
        case GET_VALID_USER_REQUEST: {
            return {
                ...state,
                isError: false,
                isloading: true,
            }
        }
        case GET_VALID_USER_SUCCESS: {
            return {
                ...state,
                isError: false,
                isloading: false,
                data: action.payload
            }
        }
        case GET_VALID_USER_FAILURE: {
            return {
                ...state,
                isError: true,
                isloading: false,
                error: action.payload
            }
        }
        default: return state
    }

}