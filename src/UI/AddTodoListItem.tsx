import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { List, RadioButton } from 'react-native-paper';
import { Action, AddTodoListitemProps } from '../../lib/types';
import { useMainCtx } from '../../state/MainCtx';

const AddTodoListItem = ({ title, list_id }: AddTodoListitemProps): ReactElement => {

	const { todoChecked, setTodoChecked } = useMainCtx();

	return (
		<List.Item
			title={title}
			onPress={() => setTodoChecked(list_id)}
			titleStyle={styles.title}
			style={styles.listItem}
			right={() => <RadioButton
				value={`${list_id}`}
				onPress={() => setTodoChecked(list_id)}
				status={todoChecked === list_id ? 'checked' : 'unchecked'}
			/>}
		/>
	);
};

const styles = StyleSheet.create({
	listItem: {
		width: '100%',
	},
	title: {
		color: '#000',
	},
});

export default AddTodoListItem;