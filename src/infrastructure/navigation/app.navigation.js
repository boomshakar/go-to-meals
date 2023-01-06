import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: "md-restaurant",
	Map: "md-map",
	SettingsNav: "md-settings",
};

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
		tabBarActiveTintColor: "tomato",
		tabBarInactiveTintColor: "gray",
		headerShown: false,
	};
};

export const AppNavigator = () => (
	<FavouritesContextProvider>
		<LocationContextProvider>
			<RestaurantsContextProvider>
				<Tab.Navigator screenOptions={createScreenOptions}>
					<Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
					<Tab.Screen name="Map" component={MapScreen} />
					<Tab.Screen name="SettingsNav" component={SettingsNavigator} />
				</Tab.Navigator>
			</RestaurantsContextProvider>
		</LocationContextProvider>
	</FavouritesContextProvider>
);
