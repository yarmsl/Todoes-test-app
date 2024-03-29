import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { TodoesScreenProp } from '../lib/types';
import BottomSheet from '../src/UI/BottomSheet';
import CategoryItem from '../src/UI/CategoryItem';

const Todoes = (): ReactElement => {
	const nav = useNavigation<TodoesScreenProp>();

	return (
		<>
			<ScrollView contentContainerStyle={styles.container} style={styles.root}>
				<CategoryItem/>
			</ScrollView>
			<FAB
				style={styles.fab}
				icon="plus"
				onPress={() => nav.navigate('AddTodo')}
			/>
			<BottomSheet/>
		</>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		width: '100%',
		minHeight: '100%',
		flexDirection: 'column',
		backgroundColor: '#fff',
	},
	container: {
		paddingBottom: 100
	},
	fab: {
		position: 'absolute',
		margin: 20,
		right: 0,
		bottom: 0,
	},
});

export default Todoes;