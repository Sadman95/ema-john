import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";
import { useState, useEffect } from "react"
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // sign in with google:
    
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
        
    }

    // sign out:
    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({});
        })
    }

    // special observer for currently logged user:
    useEffect(() =>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
        }) 
    }, [auth])

    return{
        user,
        error,
        signInWithGoogle,
        logOut,
        setError,
    }
}
export default useFirebase;