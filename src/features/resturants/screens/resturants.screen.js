import React from "react";
import { FlatList, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantInfoCard } from "../components/resturant-info-card";

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

export const RestaurantsScreen = () => {
	const [searchQuery, setSearchQuery] = React.useState("");

	const onChangeSearch = (query) => setSearchQuery(query);

	// const isAndroid = Platform.OS === "android";
	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
			</SearchContainer>
			<RestaurantList
				data={[
					{ name: 1 },
					{ name: 2 },
					{ name: 3 },
					{ name: 4 },
					{ name: 5 },
					{ name: 6 },
					{ name: 7 },
					{ name: 8 },
					{ name: 9 },
					{ name: 10 },
					{ name: 11 },
					{ name: 12 },
					{ name: 13 },
					{ name: 14 },
				]}
				renderItem={({ item }) => (
					<Spacer position="bottom" size="large">
						<RestaurantInfoCard id={JSON.stringify(item.name)} />
					</Spacer>
				)}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
