import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ListItem, Divider } from 'react-native-elements';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import { List, RadioButton, useTheme } from 'react-native-paper';

const CategoryItem = () => {
	const theme = useTheme();
	const [expanded, setExpanded] = useState(false);

	const styles = StyleSheet.create({
		root: {
			width: '100%',
		},
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
		listItem: {
			height: 50,
			maxHeight: 50,
			backgroundColor: theme.colors.background
		},
		listTitleCenter: {
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
		<List.Section style={styles.root}>
			<List.Subheader style={{textTransform: 'uppercase'}}>заголовок</List.Subheader>
			<ListItem.Swipeable  //Сделать отдельным компонентом
				containerStyle={styles.listItem}
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
					<ListItem.Title>Задача</ListItem.Title>
				</ListItem.Content>
			</ListItem.Swipeable>
			<List.Accordion
				left={() => <List.Icon icon={expanded ? 'chevron-up' : 'chevron-down'} />}
				right={() => null}
				title='Завершенные'
				expanded={expanded}
				onPress={() => setExpanded(p => !p)}
				style={[styles.listItem, styles.listTitleCenter]}
				
			>
				<List.Item //Сделать отдельным компонентом
					left={() => <List.Icon icon='check' color={'green'}/>}
					title='задача 12312'
					titleStyle={styles.doneTitle}
					style={[styles.listItem, styles.listTitleCenter]}
				/>
			</List.Accordion>
		</List.Section >
	);
};

export default CategoryItem;