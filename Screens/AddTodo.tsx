import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, TextInput, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { todoList } from '../lib/types';
import AddTodoListItem from '../src/UI/AddTodoListItem';
import { useMainCtx } from '../state/MainCtx';

const AddTodo = (): ReactElement => {
	const selectTodos = (state: todoList[]) => state
	const todoesList = useSelector(selectTodos);
	const theme = useTheme();
	const {todoTitle, setTodoTitle, editTodoError, setEditTodoError} = useMainCtx();

	const validTodoTitle = (text: string) => {
		if (text.length > 0) {
			setTodoTitle(text);
			setEditTodoError(false);
		} else {
			setTodoTitle(text);
			setEditTodoError(true);
		}
	}

	return (
		<ScrollView style={styles.root}>
			<TextInput
				value={todoTitle}
				onChangeText={validTodoTitle}
				placeholder='Название задачи'
				underlineColor={theme.colors.background}
				style={styles.input}
				error={editTodoError}
			/>
			<List.Section style={styles.container}>
				<List.Subheader style={styles.title}>Категория</List.Subheader>
				{todoesList && todoesList.map(list => {
					return <AddTodoListItem key={list.id} title={list.title} list_id={list.id} />
				})}
			</List.Section>
		</ScrollView>
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
	title: {
		textTransform: 'uppercase',
	},
	container: {
		marginHorizontal: 10,
		marginVertical: 0
	},
	input: {
		backgroundColor: '#fff',
		fontSize: 22,
		marginHorizontal: 10
	}
});

export default AddTodo;