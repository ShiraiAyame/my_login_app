import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth, useUser } from "../hooks/firebase";
import Signup from "./signup";
import auth from "firebase/auth";

function Home() {
  const router = useRouter();
  const auth = useAuth(); // useAuthフックを使って認証情報を取得

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) router.push("/home");
  }, [auth, router]);
 
  return <Signup />;
}

export default Home;