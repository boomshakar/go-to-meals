import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components";
import { ResturantsScreen } from "./src/features/resturants/screens/resturants.screen";
import { theme } from "./src/infrastructure/theme";

export default function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<PaperProvider>
					<ResturantsScreen />
				</PaperProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
