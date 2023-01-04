import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../restaurant/compact-resataurant-info.component";
import { Spacer } from "../spacer/spacer.component";

const FavouritesWrapper = styled.View`
	padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
	if (!favourites.length) {
		return <></>;
	}
	return (
		<FavouritesWrapper>
			<Spacer variant="left.large">
				<Text variant="caption">Favourites</Text>
			</Spacer>

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{favourites.map((restaurant) => {
					const key = restaurant.name;
					return (
						<Spacer key={key} position="left" size="medium">
							<TouchableOpacity
								onPress={() =>
									onNavigate("RestaurantDetail", {
										restaurant,
									})
								}
							>
								<CompactRestaurantInfo restaurant={restaurant} />
							</TouchableOpacity>
						</Spacer>
					);
				})}
			</ScrollView>
		</FavouritesWrapper>
	);
};
