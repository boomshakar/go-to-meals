import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
	return (
		<SettingsStack.Navigator
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			}}
		>
			<SettingsStack.Screen
				options={{
					headerMode: "none",
				}}
				name="Settings"
				component={SettingsScreen}
			/>
			<SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
		</SettingsStack.Navigator>
	);
};
