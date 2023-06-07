import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth, useUser } from "../hooks/firebase";
import Signup from "./signup";

function Home() {
  const router = useRouter();
  const currentUser = useUser();

  // ログイン済みのユーザーがいる場合は別の画面にリダイレクトする
  useEffect(() => {
    if (currentUser) {
    }
  }, [currentUser]);

  return <Signup />;
}

export default Home
