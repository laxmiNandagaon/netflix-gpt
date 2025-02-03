import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/fireBase';  // Import your initialized auth object
import { ValidateItems } from '../utils/Validate';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleSubmit = () => {
    // Include name validation when signing up
    const message = ValidateItems(email.current.value, password.current.value);
    if (message) {
      setErrorMessage(message);
    } else {
      if (!isSignInForm) {
        // Sign-up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user); // Handle the created user
            updateProfile(user, {
              displayName: name.current.value
            }).then(()=>{
             const{uid,displayName,email}=auth.currentUser;
                         dispatch(addUser({
                          uid:uid,
                          displayName:displayName,
                          email:email})
                        );
                navigate('/browse');
            }).catch((error) => {
              setErrorMessage(error.message);
            });
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage);  // Display the error message to the user
          });
      } else {
        // Sign-in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate('/browse');
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(''); // Clear error message when toggling form
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <form className="absolute bg-black z-10 flex flex-col w-3/12 h-auto left-1/3 top-1/4 bg-opacity-70" onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-red-600 mx-4 my-2 font-bold">{isSignInForm ? "SIGN IN" : "SIGN UP"}</h1>
        {!isSignInForm ? (
          <input className="my-4 px-4 mx-4 py-2 bg-gray-600" type="text" ref={name} placeholder="Enter your name" />
        ) : null}
        <input className="my-4 px-4 mx-4 py-2 bg-gray-600" type="email" ref={email} placeholder="Enter email address" />
        <input className="my-4 px-4 mx-4 py-2 bg-gray-600" type="password" ref={password} placeholder="Enter password" />
        <button
          className="bg-red-600 my-4 px-4 mx-4 py-2"
          onClick={handleSubmit}
          disabled={!!errorMessage}
        >
          {isSignInForm ? "SIGN IN" : "SIGN UP"}
        </button>
        {errorMessage && <p className="text-red-500 font-semibold mx-4">{errorMessage}</p>}
        <p className="my-4 px-2 mx-4 py-2 text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up" : "Already a user? Sign in"}
        </p>
      </form>
      <div className="absolute top-0 left-0 w-full h-full object-cover">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg" alt="Netflix bg img" />
      </div>
    </div>
  );
};

export default Login;
