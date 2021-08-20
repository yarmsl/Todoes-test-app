import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ListItem, Divider } from 'react-native-elements';
import { RadioButton, useTheme } from 'react-native-paper';
import { ListItemProps } from '../../lib/types';
import { useDispatch } from 'react-redux';
import { doneTodo } from '../../state/actions';
import { checkedTodo } from '../../lib/fetch';

const SwipableListItem = ({title, id, list_id}: ListItemProps) => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const styles = StyleSheet.create({
		side: {
			display: 'flex',
			flexDirection: 'row',
			backgroundColor: theme.colors.background
		},
		sideButton: {
			minHeight: '100%',
			width: 63,
			backgroundColor: theme.colors.background
		},
		divider: {
			width: 1
		},
		listItemSwipable: {
			height: 50,
			maxHeight: 50,
			backgroundColor: theme.colors.background,
			marginLeft: 2
		},
	});

	return (

		<ListItem.Swipeable  
			onPress={() => { dispatch(doneTodo(list_id, id)); checkedTodo(list_id, id, true);}}
			containerStyle={styles.listItemSwipable}
			leftContent={
				<View style={styles.side}>
					<Button
						icon={{ name: 'edit', type: 'antdesign' }}
						buttonStyle={styles.sideButton}
					/>
					<Divider orientation='vertical' />
				</View>
			}
			rightContent={
				<View style={styles.side}>
					<Divider style={styles.divider} orientation='vertical' />
					<Button icon={{ name: 'delete', type: 'antdesign' }}
						buttonStyle={styles.sideButton}
					/>
				</View>
			}
			rightWidth={65}
			leftWidth={65}
		>
			<RadioButton value='1' />
			<ListItem.Content>
				<ListItem.Title>{title}</ListItem.Title>
			</ListItem.Content>
		</ListItem.Swipeable>

	);
};

export default SwipableListItem;