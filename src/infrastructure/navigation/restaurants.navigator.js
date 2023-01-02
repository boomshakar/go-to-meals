import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { RestaurantDetailScreen } from "../../features/resturants/screens/restaurant-detail.screen";
import { RestaurantsScreen } from "../../features/resturants/screens/resturants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
	return (
		<RestaurantStack.Navigator screenOptions={{ headerMode: false }}>
			<RestaurantStack.Screen name="RestaurantLists" component={RestaurantsScreen} />
			<RestaurantStack.Screen
				name="RestaurantDetail"
				component={RestaurantDetailScreen}
				options={{ gestureEnabled: true, gestureResponseDistance: 350, ...TransitionPresets.ModalPresentationIOS }}
			/>
		</RestaurantStack.Navigator>
	);
};
