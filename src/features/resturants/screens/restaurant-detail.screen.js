import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/resturant-info-card";

export const RestaurantDetailScreen = ({ route }) => {
	const { restaurant } = route.params;
	return (
		<SafeArea>
			<RestaurantInfoCard restaurant={restaurant} />
		</SafeArea>
	);
};
