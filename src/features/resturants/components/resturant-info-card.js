import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
	const {
		name = "Some Restaurant",
		icon,
		photos = [
			"https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
		],
		address = "100 some random street",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily,
	} = restaurant;
	return (
		<Card style={styles.restaurantCard} elevation={5}>
			<Card.Cover source={{ uri: photos[0] }} style={styles.cardImage} />
			<Text style={styles.name}>{name}</Text>
		</Card>
	);
};

const styles = StyleSheet.create({
	restaurantCard: {
		borderRadius: 5,
		backgroundColor: "#FFFF",
	},
	cardImage: {
		padding: 20,
		borderRadius: 5,
		backgroundColor: "#FFFF",
	},
	name: {
		padding: 20,
	},
});
