import React, { ReactElement, useState } from 'react';
import { ScrollView, StyleSheet, View, Modal, TouchableWithoutFeedback } from 'react-native';
import { useTheme, List, TextInput, IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoesList, removeTodoesList } from '../../lib/fetch';
import { ListItemProps, todoList } from '../../lib/types';
import { addTodoesListStore, removeTodoesListStore } from '../../state/actions';
import { useMainCtx } from '../../state/MainCtx';

const BottomSheet = (): ReactElement => {
	const dispatch = useDispatch();
	const selectTodos = (state: todoList[]) => state
	const todoesList = useSelector(selectTodos);
	const {openBottomSheet, setOpenBottomSheet} = useMainCtx();
	const theme = useTheme();
	const [text, setText] = useState('');
	const [error, setError] = useState(false);

	const styles = StyleSheet.create({
		root: {
			height: '100%',
			backgroundColor: theme.colors.backdrop
		},
		bottomSheetTop: {
			flex: 1,

		},
		bottomSheetBottom: {
			maxHeight: '50%',
			backgroundColor: theme.colors.background,
			borderTopLeftRadius: theme.roundness,
			borderTopRightRadius: theme.roundness,
			paddingVertical: 16,
			paddingHorizontal: 24
		},
		bottomSheetBottomSW: {
			height: 'auto',
		},
		input: {
			marginBottom: 4,
			backgroundColor: theme.colors.background,
			paddingHorizontal: 6
		},
		listitem: {
			paddingHorizontal: 0,
			paddingVertical: 0
		}
	});

	const ListItem = ({ title, id }: ListItemProps) => {
		return (
			<List.Item
				style={styles.listitem}
				title={title}
				right={() => <IconButton
					icon='delete'
					color={theme.colors.error}
					onPress={() => {dispatch(removeTodoesListStore(id)); removeTodoesList(id)}}
				/>}
			/>
		)
	}

	const addCategory = () => {
		if (text.length < 1) {
			setError(true);
		} else {
			dispatch(addTodoesListStore(text));
			addTodoesList(text);
			setError(false);
			setText('');
		}
	}

	return (
		<Modal
			visible={openBottomSheet}
			animationType='fade'
			transparent={true}
		>
			<View style={styles.root}>
				<TouchableWithoutFeedback onPress={() => setOpenBottomSheet(false)}>
					<View style={styles.bottomSheetTop}>
					</View>
				</TouchableWithoutFeedback>
				<View style={styles.bottomSheetBottom}>
					<ScrollView style={styles.bottomSheetBottomSW}>
						{todoesList.length > 0 && todoesList.map((item, i) => {
							return (
								<ListItem key={i} title={item.title} id={item.id} />
							)
						})}
					</ScrollView>
					<View>
						<TextInput
							right={<TextInput.Icon
								name='plus'
								color={theme.colors.backdrop}
								onPress={() => addCategory()}
							/>}
							value={text}
							underlineColor={theme.colors.background}
							underlineColorAndroid={theme.colors.background}
							onChangeText={setText}
							placeholder='Новая категория'
							error={error}
							style={styles.input}
						/>
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default BottomSheet;