import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/resturant-info-card";

export const ResturantsScreen = () => {
	const [searchQuery, setSearchQuery] = React.useState("");

	const onChangeSearch = (query) => setSearchQuery(query);

	const isAndroid = Platform.OS === "android";
	return (
		<SafeAreaView style={styles.container(isAndroid, StatusBar.currentHeight)}>
			<View style={styles.searchContainer}>
				<Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
			</View>
			<View style={styles.listContainer}>
				<RestaurantInfoCard />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: (isAndroid, height) => ({
		flex: 1,
		marginTop: isAndroid ? height : 0,
	}),
	searchContainer: {
		width: "100%",
		padding: 16,
	},
	listContainer: {
		flex: 1,
		padding: 16,
	},
});
