import React, { useState, useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';
import { getTodoesList } from './lib/fetch';
import { Action, todo, todoList } from './lib/types';
import Screens from './Screens';
import MainContext from './state/MainCtx';

const theme = {
	...DefaultTheme,
	dark: false,
	colors: {
		...DefaultTheme.colors,
		background: '#fff',
		primary: '#fff',
		accent: '#2196f3'
	}
}

const Main = () => {
	const [todoes, setTodoes] = useState([] as todoList[]);

	useEffect(() => {
		getTodoesList().then(r => setTodoes(r as todoList[]))
	}, [])

	const todoesListReducer = (state = todoes, action: Action) => {
		switch (action.type) {
			case 'ADD_TODOESLIST':
				return [
					...state,
					{ id: state[state.length - 1].id + 1, created_at: new Date().toISOString(), candidate_id: 65, title: action.title, todos: [] as todo[], updated_at: new Date().toISOString() }
				];
			case 'REMOVE_TODOESLIST':
				return state.filter(list => list.id !== action.id);
			case 'DONE_TODO':
				return state.map(list => {
					if (list.id === action.list_id) {
						return {
							...list,
							todos: list.todos.map(todo => todo.id === action.id ? { ...todo, checked: true } : todo)
						}
					} else {
						return list
					}
				});
			case 'UNDONE_TODO':
				return state.map(list => {
					if (list.id === action.list_id) {
						return {
							...list,
							todos: list.todos.map(todo => todo.id === action.id ? { ...todo, checked: false } : todo)
						}
					} else {
						return list
					}
				})
			default:
				return state;
		}
	};

	const store = createStore(todoesListReducer);

	return (
		<StoreProvider store={store}>
			<MainContext>
				<PaperProvider theme={theme}>
					{console.log(todoes)}
					<Screens />
				</PaperProvider>
			</MainContext>
		</StoreProvider>
	);
}

export default Main