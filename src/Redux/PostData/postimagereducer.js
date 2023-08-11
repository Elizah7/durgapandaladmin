

import { POST_IMAGE_FAILURE, POST_IMAGE_REQUEST, POST_IMAGE_SUCCESS,POST_VIDEO_FAILURE,POST_VIDEO_REQUEST,POST_VIDEO_SUCCESS } from './postimageactiontype'
const init = {
    isError: false,
    isLoading: false,
    data: "",
}
export const postImagesReducer = (state = init, { type, payload }) => {
    switch (type) {
        case POST_IMAGE_REQUEST: {
            return {
                ...state,
                isError: false,
                isloading: true,
            }
        }
        case POST_IMAGE_SUCCESS: {
            return {
                ...state,
                isError: false,
                isloading: false,
                data: payload
            }
        }
        case POST_IMAGE_FAILURE: {
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


const init2 = {
    isError: false,
    isLoading: false,
    data: "",
}
export const postvideosreducer = (state = init, { type, payload }) => {
    switch (type) {
        case POST_VIDEO_REQUEST: {
            return {
                ...state,
                isError: false,
                isloading: true,
            }
        }
        case POST_VIDEO_SUCCESS: {
            return {
                ...state,
                isError: false,
                isloading: false,
                data: payload
            }
        }
        case POST_VIDEO_FAILURE: {
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