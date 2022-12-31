import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts as useOswald } from "@expo-google-fonts/oswald";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components";
import { Text } from "./src/components/typography/text.component";
import { RestaurantsScreen } from "./src/features/resturants/screens/resturants.screen";
import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/utils/safe-area.component";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: "md-restaurant",
	Map: "md-map",
	Settings: "md-settings",
};

const Settings = () => (
	<SafeArea>
		<Text>Settings</Text>
	</SafeArea>
);
const Map = () => (
	<SafeArea>
		<Text>Map</Text>
	</SafeArea>
);

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
		tabBarActiveTintColor: "tomato",
		tabBarInactiveTintColor: "gray",
	};
};

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
				<PaperProvider>
					<NavigationContainer>
						<Tab.Navigator screenOptions={createScreenOptions}>
							<Tab.Screen name="Restaurants" component={RestaurantsScreen} />
							<Tab.Screen name="Map" component={Map} />
							<Tab.Screen name="Settings" component={Settings} />
						</Tab.Navigator>
					</NavigationContainer>
				</PaperProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
