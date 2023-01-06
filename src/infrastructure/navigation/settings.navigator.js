import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "../../components/typography/text.component";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

const SettingsStack = createStackNavigator();

const Fav = () => (
	// <SafeArea>
	<Text>Favourites</Text>
	// </SafeArea>
);

export const SettingsNavigator = () => {
	return (
		<SettingsStack.Navigator
			headerMode="screen"
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			}}
		>
			<SettingsStack.Screen
				options={{
					headerMode: false,
				}}
				name="Settings"
				component={SettingsScreen}
			/>
			<SettingsStack.Screen name="Favourites" component={Fav} />
		</SettingsStack.Navigator>
	);
};
