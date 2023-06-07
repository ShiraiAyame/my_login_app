import { useContext } from "react";
import auth from "firebase/auth"; // Firebaseの認証オブジェクトのインポート

const useAuth = () => {
  return auth;
};

export default useAuth;