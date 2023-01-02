import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/resturant-info-card";
import { Search } from "../components/search.component";

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;
const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

export const RestaurantsScreen = ({ navigation }) => {
	const { isLoading, restaurants } = useContext(RestaurantsContext);

	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading size={50} animating={true} color={MD2Colors.blue300} />
				</LoadingContainer>
			)}
			<Search />
			<RestaurantList
				data={restaurants}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail")}>
							<Spacer position="bottom" size="large">
								<RestaurantInfoCard restaurant={item} />
							</Spacer>
						</TouchableOpacity>
					);
				}}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
