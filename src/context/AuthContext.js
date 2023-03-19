import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../auth/firebase";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/Toast";
import {
  toastSucessNotify2,
  toastErrorNotify2,
} from "../helpers/ReactHotToast";

// export const {Provider}=createContext()
export const AuthContext = createContext();

//* with custom hook
// export const useAuthContext = () => {
//     return useContext(AuthContext);
//   };

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );
  const navigate = useNavigate();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      let userCredendial = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: "",
      });
      toastSuccessNotify("Registered successfully (React-Toastify)");
      toastSucessNotify2("Registered successfully (React Hot Toast)");
      navigate("/");
      console.log(userCredendial);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${error.message} React-Toastify`);
      toastErrorNotify2("Wrong email or password (React Hot Toast)");
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccessNotify("Logged in successfully (React-Toastify)");
      toastSucessNotify2("Logged in successfully (React Hot Toast)");
      navigate("/");
    } catch (error) {
      console.log(error);
      toastErrorNotify("Wrong email or password (React-Toastify)");
      toastErrorNotify(`${error.message} React-Toastify`);
    }
  };
  const logOut = () => {
    signOut(auth);
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
      } else {
        sessionStorage.clear();
        setCurrentUser(false);
      }
    });
  };

  const provider = new GoogleAuthProvider();
  const signUpProvider = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        toastSuccessNotify("Logged in successfully (React-Toastify)");
        toastSucessNotify2("Logged in successfully (React Hot Toast)");
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const forgotPassword = (email) => {
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toastWarnNotify("Please check your mail box!");
        // alert("Please check your mail box!");
      })
      .catch((err) => {
        toastErrorNotify(err.message);
        // alert(err.message);
        // ..
      });
  };

  const values = {
    createUser,
    signIn,
    logOut,
    currentUser,
    signUpProvider,
    forgotPassword,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
