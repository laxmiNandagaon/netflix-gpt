import React, { useEffect } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/fireBase'
import { LOGO, SIGNOUT_IMG } from '../utils/constants';

const Header = () => {
  const user=useSelector((store)=>store.user)
  console.log("user is",user);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
          const{uid,displayName,email}=user;
          dispatch(addUser({uid:uid,displayName:displayName,email:email}));
          navigate('/browse');
      }else{
        dispatch(removeUser())  ;
        navigate('/');
      }
    })
  },[]);
  const handleSignout=()=>{
    const auth = getAuth();
signOut(auth).then(() => {
  navigate('/')
}).catch((error) => {
  navigate('/Error')
});
  }
  return (
    <div className="absolute w-full px-8 py-2 z-10 bg-gradient-to-b from-black flex justify-between items-center">
      <img
        className="w-44"
        src={LOGO}
        alt="netflix-logo"
      />
      { user &&<div className="flex p-2">
        <img
        className='w-12 h-12'
          src={SIGNOUT_IMG}
          alt="signout"
        />
        <span>{user.displayName}</span>
        <button className='font-bold text-white' onClick={handleSignout}>Signout</button>
      </div>}
    </div>
  );
};

export default Header;
