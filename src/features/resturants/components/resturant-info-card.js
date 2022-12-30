import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[3]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
	font-family: ${(props) => props.theme.fonts.body};
	padding: ${(props) => props.theme.space[3]};
	color: ${(props) => props.theme.colors.ui.primary};
`;

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
		<RestaurantCard style={styles.restaurantCard} elevation={5}>
			<RestaurantCardCover source={{ uri: photos[0] }} style={styles.cardImage} />
			<Title>{name}</Title>
		</RestaurantCard>
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
