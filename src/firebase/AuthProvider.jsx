import PropTypes from "prop-types";
import { createContext, useState } from "react";
import auth from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }



  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };



  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  const logOut = () => {
    return signOut(auth);
  }
  const userInfo = {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    logOut
  };
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
