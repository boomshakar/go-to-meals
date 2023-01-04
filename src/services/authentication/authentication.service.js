import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (auth, email, password) => signInWithEmailAndPassword(auth, email, password);
