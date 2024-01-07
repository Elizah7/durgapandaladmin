

import { POST_CHATBOT_FAILURE,POST_CHATBOT_REQUEST,POST_CHATBOT_SUCCESS } from "./actiontype" 

const init = {
    isError: false,
    isLoading: false,
    data: "",
}

export const postChatBotReducer = (state = init, { type, payload }) => {
    switch (type) {
        case POST_CHATBOT_REQUEST: {
            return {
                ...state,
                isError: false,
                isloading: true,
            }
        }
        case POST_CHATBOT_SUCCESS: {
            return {
                ...state,
                isError: false,
                isloading: false,
                data: payload
            }
        }
        case POST_CHATBOT_FAILURE: {
            return {
                ...state,
                isError: true,
                isloading: false,
                error: payload
            }
        }
        default: return state
    }

}


