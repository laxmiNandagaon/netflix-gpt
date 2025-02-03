import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const user=useSelector((store)=>store.user)
  const navigate=useNavigate();
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
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      { user &&<div className="flex p-2">
        <img
        className='w-12 h-12'
          src="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          alt="signout"
        />
        <span>{user.displayName}</span>
        <button className='font-bold text-white' onClick={handleSignout}>Signout</button>
      </div>}
    </div>
  );
};

export default Header;
