import React, { ReactElement, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { TodoesScreenProp } from '../lib/types';
import BottomSheet from '../src/UI/BottomSheet';
import { useMainCtx } from '../state/MainCtx';
import todoes from '../state/state.json';
import CategoryItem from '../src/UI/CategoryItem';



const Todoes = (): ReactElement => {
console.log(todoes);
	const nav = useNavigation<TodoesScreenProp>();

	return (
		<>
			<ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.container}>
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
	container: {
		flex: 1,
		width: '100%',
		minHeight: '100%',
		flexDirection: 'column',
		backgroundColor: '#fff',

	},
	fab: {
		position: 'absolute',
		margin: 20,
		right: 0,
		bottom: 0,
	},
});

export default Todoes;