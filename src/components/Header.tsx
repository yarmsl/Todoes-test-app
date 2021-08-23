import React, { ReactElement, useEffect } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TodoesScreenProp, todoList } from '../../lib/types';
import { useMainCtx } from '../../state/MainCtx';
import { addTodoStore, deleteTodo, editTodoStore } from '../../state/actions';
import { useDispatch, useSelector } from 'react-redux';

const Header = (): ReactElement => {

	const selectTodos = (state: todoList[]) => state
	const todoesList = useSelector(selectTodos);
	const nav = useNavigation<TodoesScreenProp>();
	const dispatch = useDispatch();
	const {setOpenBottomSheet, todoTitle, todoChecked, editTodo, setEditTodo, setTodoChecked, setTodoTitle, initListId, editTodoError, setEditTodoError} = useMainCtx();

	const reset = () => {
		setTodoTitle('');
		setTodoChecked(0);
		setEditTodo(0);
		setEditTodoError(false);
	}

	useEffect(() => {
		nav.addListener('beforeRemove', reset);
	})

	const addTodoItem = () => {
		if (todoTitle.length > 0 && todoChecked !== 0) {
			dispatch(addTodoStore(todoChecked, todoTitle));
			reset();
			nav.goBack();
		} else {
			setEditTodoError(true);
		}
	}
	
	const editTodoItem = () => {
		if (todoTitle.length > 0 && todoChecked !== 0) {
			if (todoesList.filter(todoList => todoList.id === todoChecked)[0].todos.map(todo => todo.id === editTodo ? true : false).includes(true)) {
				dispatch(editTodoStore(todoChecked, editTodo, todoTitle));
			} else {
				dispatch(deleteTodo(initListId, editTodo));
				dispatch(addTodoStore(todoChecked, todoTitle));
			}
		} else {
			setEditTodoError(true);
		}

		reset();
		nav.goBack();
	}

	return (
		<Appbar.Header style={styles.root}>
			<Appbar.BackAction
				style={nav.canGoBack() ? undefined : styles.back}
				disabled={!nav.canGoBack()}
				onPress={() => {reset(); nav.goBack();}}
			/>
			<Appbar.Content title={nav.canGoBack() ? undefined : 'Задачи'} />
			{nav.canGoBack() ? 
			<Appbar.Action icon='check' color='green' onPress={() => { editTodo === 0 ? addTodoItem() : editTodoItem()}} />
			:
			<Appbar.Action icon='shape-outline' onPress={() => setOpenBottomSheet(true)} />}
		</Appbar.Header>
	);
};

const styles = StyleSheet.create({
	root: {
		elevation: 0,
		height: 65,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0,
		shadowRadius: 0,
	},
	back: {
		opacity: 0
	}
})

export default Header;