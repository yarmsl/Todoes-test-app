import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { todoList } from '../../lib/types';
import ListAccordionItem from './ListAccordionItem';
import SwipableListItem from './SwipableListItem';

const CategoryItem = () => {
	const dispatch = useDispatch();
	const selectTodos = (state: todoList[]) => state
	const todoesList = useSelector(selectTodos);
	const styles = StyleSheet.create({
		root: {
			width: '100%',
		},
		title: {
			textTransform: 'uppercase',
			marginLeft: 10
		}
	});
	
	return (
		<>
			{todoesList.length > 0 && todoesList.map(list => {
				return (
					< List.Section style={styles.root} key={list.id} >
						<List.Subheader style={styles.title}>{list.title}</List.Subheader>
						{list.todos?.length > 0 && list.todos.filter(item => item.checked === false).map(todoes => {
							return (
								<SwipableListItem key={todoes.id} title={todoes.text} list_id={todoes.list_id} id={todoes.id}/>
							)
						})}
						<ListAccordionItem todos={list.todos}/>
					</List.Section >
				)
			})}
		</>
	);
};

export default CategoryItem;