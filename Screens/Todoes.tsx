import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';

const Todoes = (): ReactElement => {
	return (
		<View>
			{console.log(process.env)}
			<Text>Todoes</Text>
		</View>
	);
};

export default Todoes;