import React, { ReactElement, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Modal, TouchableWithoutFeedback } from 'react-native';
import { useTheme, List, TextInput, IconButton } from 'react-native-paper';
import { useMainCtx } from '../../state/MainCtx';

interface ListItem {
	title: string;
	n: number;
}

const BottomSheet = (): ReactElement => {
	const data = ['redux', 'react', 'classtransformer', 'ios'];
	const {openBottomSheet, setOpenBottomSheet} = useMainCtx();
	const theme = useTheme();
	console.log(theme);
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
		}
	});

	const ListItem = ({ title, n }: ListItem) => {
		return (
			<List.Item
				style={styles.listitem}
				title={title}
				right={() => <IconButton
					icon='delete'
					color={theme.colors.error}
					onPress={() => console.log(`delete ${n}`)}
				/>}
			/>
		)
	}

	const addCategory = () => {
		console.log('add');
		if (text.length < 1) {
			setError(true);
		} else {
			setError(false);
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
						{data.map((item, i) => {
							return (
								<ListItem key={i} title={item} n={i} />
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