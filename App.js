import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
	const isAndroid = Platform.OS === "android";

	return (
		<>
			<SafeAreaView style={styles.container(isAndroid, StatusBar.currentHeight)}>
				<View style={styles.searchContainer}>
					<Text>Search</Text>
				</View>
				<View style={styles.listContainer}>
					<Text>List</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style="auto" />
		</>
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
