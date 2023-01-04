import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts as useOswald } from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components";
import { initFirebase } from "./firebaseConfig";
import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

//initialize firebase configuration
// initializeApp(firebaseConfig);
initFirebase();

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthenticationContextProvider>
					<FavouritesContextProvider>
						<LocationContextProvider>
							<RestaurantsContextProvider>
								<PaperProvider>
									<Navigation />
								</PaperProvider>
							</RestaurantsContextProvider>
						</LocationContextProvider>
					</FavouritesContextProvider>
				</AuthenticationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
