import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts as useOswald } from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { Provider as PaperProvider, Text } from "react-native-paper";
import { ThemeProvider } from "styled-components";
import { initFirebase } from "./firebaseConfig";
import { AppNavigator } from "./src/infrastructure/navigation/app.navigation";
import { theme } from "./src/infrastructure/theme";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

//initialize firebase configuration
initFirebase();

export default function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const auth = getAuth();

	useEffect(() => {
		setTimeout(() => {
			signInWithEmailAndPassword(auth, "tester@mail.com", "tester")
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;

					setIsAuthenticated(true);
					// console.log({ user });
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setIsAuthenticated(false);
					// console.log({ errorCode, errorMessage });
				});
		}, 2000);
	}, [auth, isAuthenticated]);

	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	if (!isAuthenticated) return <Text>Not Signed In</Text>;

	return (
		<>
			<ThemeProvider theme={theme}>
				<FavouritesContextProvider>
					<LocationContextProvider>
						<RestaurantsContextProvider>
							<PaperProvider>
								<AppNavigator />
							</PaperProvider>
						</RestaurantsContextProvider>
					</LocationContextProvider>
				</FavouritesContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
