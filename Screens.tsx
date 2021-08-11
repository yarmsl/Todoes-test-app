import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainLayout from './src/layouts/MainLayout';
import Todoes from './Screens/Todoes';
import AddTodo from './Screens/AddTodo';
import Header from './src/components/Header';

const Stack = createStackNavigator();

const Screens = () => {
	
	return (
		<NavigationContainer>
			<MainLayout>
				<Stack.Navigator
					initialRouteName={'Todoes'}
					screenOptions={{
						headerMode: 'float',
						cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
						cardStyle: { backgroundColor: 'transparent' },
						header: () => <Header/>
					}}
				>
					<Stack.Screen
						name='Todoes'
						component={Todoes}
						options={{ title: 'Задачи' }}
					/>
					<Stack.Screen name='AddTodo' component={AddTodo} />
				</Stack.Navigator>
			</MainLayout>
		</NavigationContainer>
	);
};
export default Screens;