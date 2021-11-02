import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, getIdToken  } from "firebase/auth";
import { useState, useEffect } from "react"
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // sign in with google:
    
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
        
    }

    // sign out:
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(() =>{
            setUser({});
        })
        .finally(() => setIsLoading(false));
    }

    // special observer for currently logged user:
    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
                getIdToken(user)
                .then((idToken) => {
                    localStorage.setItem('idToken', idToken);
                });
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        }) 
        return () => unsubscribed;
    }, [auth])

    return{
        user,
        error,
        isLoading,
        signInWithGoogle,
        logOut,
        setError,
        setIsLoading
    }
}
export default useFirebase;