import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
	const { user: isAuthenticated } = useContext(AuthenticationContext);

	return <NavigationContainer>{isAuthenticated ? <AccountNavigator /> : <AccountNavigator />}</NavigationContainer>;
};
