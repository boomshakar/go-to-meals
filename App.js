import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { ResturantsScreen } from "./src/features/resturants/screens/resturants.screen";

export default function App() {
	return (
		<PaperProvider>
			<ResturantsScreen />
			<ExpoStatusBar style="auto" />
		</PaperProvider>
	);
}
