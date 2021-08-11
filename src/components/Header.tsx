import React, { ReactElement } from 'react';
import { Appbar } from 'react-native-paper';


const Header = (): ReactElement => {
	return (
		<Appbar.Header>
			<Appbar.BackAction onPress={() => console.log('go back ahead')} />
			<Appbar.Content title='Задачи'/>
			<Appbar.Action icon='shape-outline' onPress={() => console.log('shapes')}/>
		</Appbar.Header>
	);
};

export default Header;