import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";
import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // sign in with google:
    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const logUser = result.user;
            console.log(logUser);
            setUser(logUser);
        })
        .catch(error =>{
            setError(error.message);
        })
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
    }, [])

    return{
        user,
        error,
        signInWithGoogle,
        logOut,
    }
}
export default useFirebase;