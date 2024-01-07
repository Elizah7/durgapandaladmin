import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Loginreducer } from "./UserLogin/userloginreducer";
import usersignupreducer from "./UserSignup/usersignupreducer";
import { getImageDatareducer } from "./getdata/reducer";

import { ImageUploadreducer } from "./imageupload/imageuploadreducer";
import getsingleuserreducer from "./getsingleuser/getsingleuserreducer";
import { postImagesReducer,postvideosreducer } from "./PostData/postimagereducer";
import { getVideoDatareducer } from "./getdata/reducer";
import { get_valid_user_reducer, forgot_pass_reducer, enter_new_password_reducer, } from "./ForgotPassword/forgotpasswordreducer";
const rootReducer = combineReducers({getVideoDatareducer, postvideosreducer,get_valid_user_reducer, forgot_pass_reducer, enter_new_password_reducer, postImagesReducer, Loginreducer, usersignupreducer, getImageDatareducer, ImageUploadreducer, getsingleuserreducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
