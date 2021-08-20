import React from 'react';
import { StyleSheet } from 'react-native';
import { List, useTheme } from 'react-native-paper';
import { ListItemProps } from '../../lib/types';
import { useDispatch } from 'react-redux';
import { undoneTodo } from '../../state/actions';
import { checkedTodo } from '../../lib/fetch';

const DoneListItem = ({title, id, list_id}: ListItemProps) => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const styles = StyleSheet.create({
		listItem: {
			height: 50,
			maxHeight: 50,
			backgroundColor: theme.colors.background,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center'
		},
		doneTitle: {
			textDecorationLine: 'line-through',
			color: theme.colors.placeholder
		}
	});

	return (
		<List.Item
			left={() => <List.Icon icon='check' color={'green'} />}
			title={title}
			titleStyle={styles.doneTitle}
			style={styles.listItem}
			onPress={() => {dispatch(undoneTodo(list_id, id)); checkedTodo(list_id, id, false)}}
		/>
	);
};

export default DoneListItem;