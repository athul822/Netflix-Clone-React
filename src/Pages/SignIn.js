import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import SignINForm from "../Components/SignINForm/SignINForm";
import { app } from "../Components/Constants/firebase-config";
import { useNavigate } from "react-router";
import { ToastContainer,toast } from "react-toastify";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();
    const handleCreateUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((res) => {
            navigate("/home");
            sessionStorage.setItem("Auth Token", res._tokenResponse.refreshToken);

            //console.log(res)
        });
        console.log("create user");
    };

    const handleAction = () => {
      signInWithEmailAndPassword(auth,email,password).then((res)=>{
        navigate("/home");
        sessionStorage.setItem("Auth Token", res._tokenResponse.refreshToken);
      }).catch((err)=>{
        console.log(err)
      })
    };
    return <SignINForm setEmail={setEmail} setPassword={setPassword} handleAction={handleAction} />;
};
