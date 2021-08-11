import React, { ReactElement } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		flexDirection: 'column',
		backgroundColor: '#fff'
	}
});

const Todoes = (): ReactElement => {
	return (
		<ScrollView contentContainerStyle={{alignItems: 'center'}} style={styles.container}>
			<Text>Todoes</Text>
		</ScrollView>
	);
};

export default Todoes;