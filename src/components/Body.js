import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/fireBase'

const Body = () => {
    const dispatch=useDispatch();
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        },
    ]);
    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
            const{uid,displayName,email}=user;
            dispatch(addUser({uid:uid,displayName:displayName,email:email}));
        }else{
          dispatch(removeUser())  ;
        }
      })
    },[]);
  return (
    
   <RouterProvider router={appRouter}/>
   
  )
}

export default Body
