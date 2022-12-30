import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/resturant-info-card";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.space[3]};
`;

export const ResturantsScreen = () => {
	const [searchQuery, setSearchQuery] = React.useState("");

	const onChangeSearch = (query) => setSearchQuery(query);

	const isAndroid = Platform.OS === "android";
	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
			</SearchContainer>
			<RestaurantListContainer>
				<RestaurantInfoCard />
			</RestaurantListContainer>
		</SafeArea>
	);
};
