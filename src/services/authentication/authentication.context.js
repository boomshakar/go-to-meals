import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { loginRequest, signUpRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	const auth = getAuth();

	const onLogin = (email, password) => {
		setIsLoading(true);
		loginRequest(auth, email, password)
			.then((u) => {
				setUser(u);
			})
			.catch((e) => {
				setError(e);
			})
			.finally(() => setIsLoading(false));
	};

	const onRegister = (email, password, repeatedPassword) => {
		if (password !== repeatedPassword) {
			setError("Error: Passwords do not match");
			return;
		}
		setIsLoading(true);
		signUpRequest(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				setUser(user);
				// ...
			})
			.catch((error) => {
				// const errorCode = error.code;
				const errorMessage = error.message;
				setError(errorMessage);
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<AuthenticationContext.Provider
			value={{
				isAuthenticated: !!user,
				isLoading,
				error,
				onLogin,
				onRegister,
			}}
		>
			{children}
		</AuthenticationContext.Provider>
	);
};
