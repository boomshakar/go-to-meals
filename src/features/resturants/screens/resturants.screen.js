import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";
import { FadeInView } from "../../../components/animations/fade.animations";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantList } from "../components/restaurants-list.syles";
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

export const RestaurantsScreen = ({ navigation }) => {
	const [isToggled, setIsToggled] = useState(false);

	const { isLoading, restaurants } = useContext(RestaurantsContext);
	const { favourites } = useContext(FavouritesContext);

	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading size={50} animating={true} color={MD2Colors.blue300} />
				</LoadingContainer>
			)}
			<Search isFavouritesToggled={isToggled} onFavouritesToggle={() => setIsToggled(!isToggled)} />
			{isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}
			<RestaurantList
				data={restaurants}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}>
							<Spacer position="bottom" size="large">
								<FadeInView>
									<RestaurantInfoCard restaurant={item} />
								</FadeInView>
							</Spacer>
						</TouchableOpacity>
					);
				}}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
