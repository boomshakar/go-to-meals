import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RestaurantsScreen } from "../../features/resturants/screens/resturants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
	return (
		<RestaurantStack.Navigator headerMode="none">
			<RestaurantStack.Screen name="Restaurants" component={RestaurantsScreen} />
		</RestaurantStack.Navigator>
	);
};
