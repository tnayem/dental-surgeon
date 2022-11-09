import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
    const provider= new GoogleAuthProvider();
    
    const[user,setUser]= useState({});
// create email and password section start
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
// create email and password section end***
// sign in with email and password section start
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
// sign in with email and password section end
//Log Out section start
const logOut =()=>{
    return signOut(auth);
}
//Log Out section end
// update profile start
const updateUserProfile=(profile)=>{
    return updateProfile(auth.currentUser,profile);
}
// update profile end
// google provider pop up section start
const googleSignUp = ()=>{
    return signInWithPopup(auth,provider)
}
// google provider pop up section end

// *********************
    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
        }
    })
//**********************
    const authInfo = {user,createUser,signIn,logOut,updateUserProfile,googleSignUp}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;