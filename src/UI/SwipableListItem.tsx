import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import { List, useTheme } from 'react-native-paper';
import { ListItemProps, TodoesScreenProp } from '../../lib/types';
import { useDispatch } from 'react-redux';
import { deleteTodo, doneTodo } from '../../state/actions';
import { useNavigation } from '@react-navigation/native';
import { useMainCtx } from '../../state/MainCtx';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SwipableListItem = ({ title, id, list_id }: ListItemProps) => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const { setEditTodo, setTodoTitle, setTodoChecked, setInitListId } = useMainCtx();
	const nav = useNavigation<TodoesScreenProp>();

	const toEdit = () => {
		setEditTodo(id);
		setTodoChecked(list_id);
		setTodoTitle(title);
		setInitListId(list_id);
		nav.navigate('AddTodo');
	}

	const styles = StyleSheet.create({
		side: {
			display: 'flex',
			flexDirection: 'row',
			
		},
		sideButton: {
			maxWidth: 65,
			width: 65,
			minHeight: '100%',
			backgroundColor: theme.colors.background
		},
		divider: {
			width: 1
		},
		listItemSwipable: {
			height: 52,
			maxHeight: 52,
			justifyContent: 'center'
		},
		listItem: {
			width: '100%',
			backgroundColor: theme.colors.background,
		}
	});

	return (
		<Swipeable
			onSwipeableLeftWillOpen={() => toEdit()}
			onSwipeableRightWillOpen={() => dispatch(deleteTodo(list_id, id))}
			containerStyle={styles.listItemSwipable}
			renderLeftActions={
				(dragX) => {
					const trans = dragX.interpolate({
						inputRange: [0, 1],
						outputRange: [-65, 0],
						extrapolate: 'extend'
					});
					return (
						<Animated.View style={[styles.side, { transform: [{ translateX: trans }] }]}>
							<Button
								icon={{ name: 'edit', type: 'antdesign' }}
								buttonStyle={styles.sideButton}
								onPress={() => toEdit()}
							/>
							<Divider orientation='vertical' />
						</Animated.View>
					)
				}
			}
			renderRightActions={
				(dragX) => {
					const trans = dragX.interpolate({
						inputRange: [0, 1],
						outputRange: [65, 0],
					});
					return (
						<Animated.View style={[styles.side, { transform: [{ translateX: trans }] }]}>
							<Divider style={styles.divider} orientation='vertical' />
							<Button
								icon={{ name: 'trash-2', type: 'feather', color: theme.colors.error }}
								buttonStyle={styles.sideButton}
								onPress={() => dispatch(deleteTodo(list_id, id))}
							/>
						</Animated.View>
					)
				}
			}
		>
			<List.Item
				style={styles.listItem}
				onPress={() => dispatch(doneTodo(list_id, id))}
				title={title}
				left={() => <List.Icon
					color={theme.colors.placeholder}
					icon='checkbox-blank-circle-outline'
				/>}
			/>
		</Swipeable>
	);
};

export default SwipableListItem;