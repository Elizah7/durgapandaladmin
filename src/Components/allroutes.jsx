import React from 'react'
import {Routes ,Route} from "react-router-dom"
import HomePage from '../Pages/HomePage'
import PicturesPage from '../Pages/PicturesPage'
import VideosPage from '../Pages/VideosPage'
import {SignupPage} from '../Pages/SignupPage'
import { LoginPage } from '../Pages/LoginPage'
import Notifications from '../Pages/Notifications'
import UsersPage from '../Pages/Users'
import ProfileImageUploader from '../Pages/ProfileImageUploader'
import ForgotPasswordPage from '../Pages/ForgotPasswordPage'
import EnterNewPasswordPage from '../Pages/EnterNewPasswordPage'
import ChatbotUI from './chatbot'



const Allroutes = () => {
  return (
    <div>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/register' element={<SignupPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            {/* <Route path='/searchboxpage' element={<PrivaterouteUser><SearchBoxPage/></PrivaterouteUser>}/> */}
            {/* <Route path='/singlepage/:id' element={<PrivaterouteUser><SinglePage/></PrivaterouteUser>}/> */}
            <Route path="/pictures" element={<PicturesPage/>}/>
            <Route path="/videos" element={<VideosPage/>} />  
            <Route path="/notifications" element={<Notifications/>}/>
            <Route path="/users" element={<UsersPage/>}/>
            <Route path="/profilepicture" element={<ProfileImageUploader/>}/>
            <Route path="/forgot_password" element={<ForgotPasswordPage/>}/>
            <Route path = "/forgot_password/:id/:token" element={<EnterNewPasswordPage/>}/>
            <Route path="/chatbot" element={<ChatbotUI/>}/>
            {/* <Route path='/banusers' element={<PrivaterouteAdmin><Bannuseraccount/></PrivaterouteAdmin>}/>
            <Route path='/removeban' element={<PrivaterouteAdmin><Removebannannaccount/></PrivaterouteAdmin>}/> */}
            {/* <Route path='*' element={<NotFound />}></Route> */}
        </Routes>
    </div>
  )
}

export default Allroutes
