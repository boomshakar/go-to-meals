import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, MD2Colors, Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantInfoCard } from "../components/resturant-info-card";

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

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

export const RestaurantsScreen = () => {
	const { isLoading, error, restaurants } = useContext(RestaurantsContext);

	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading size={50} animating={true} color={MD2Colors.blue300} />
				</LoadingContainer>
			)}
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<RestaurantList
				data={restaurants}
				renderItem={({ item }) => {
					return (
						<Spacer position="bottom" size="large">
							<RestaurantInfoCard restaurant={item} />
						</Spacer>
					);
				}}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
