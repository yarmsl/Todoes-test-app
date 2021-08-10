import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Todoes from './Screens/Todoes';
import AddTodo from './Screens/AddTodo';

const Stack = createStackNavigator();

const Screens = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'Todoes'} screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
				cardStyle: { backgroundColor: '#fff'},
			}}>
				<Stack.Screen name="Todoes" component={Todoes} options={{title: 'Задачи'}}/>
				<Stack.Screen name="AddTodo" component={AddTodo}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Screens;