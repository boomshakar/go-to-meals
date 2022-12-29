import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider, Searchbar } from "react-native-paper";

export default function App() {
	const [searchQuery, setSearchQuery] = React.useState("");

	const onChangeSearch = (query) => setSearchQuery(query);

	const isAndroid = Platform.OS === "android";

	return (
		<PaperProvider>
			<SafeAreaView style={styles.container(isAndroid, StatusBar.currentHeight)}>
				<View style={styles.searchContainer}>
					<Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
				</View>
				<View style={styles.listContainer}>
					<Text>List</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style="auto" />
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: (isAndroid, height) => ({
		flex: 1,
		marginTop: isAndroid ? height : 0,
	}),
	searchContainer: {
		width: "100%",
		backgroundColor: "green",
		padding: 16,
	},
	listContainer: {
		flex: 1,
		backgroundColor: "blue",
		padding: 16,
	},
});
