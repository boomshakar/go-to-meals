import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { loginRequest } from "./authentication.service";

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

	return (
		<AuthenticationContext.Provider
			value={{
				user,
				isLoading,
				error,
				onLogin,
			}}
		>
			{children}
		</AuthenticationContext.Provider>
	);
};
