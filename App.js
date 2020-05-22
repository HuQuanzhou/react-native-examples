import React, { Component } from 'react';
import Logon from './app/Logon'
import UserList from './app/UserList'
import DetailedPage from './app/DetailedPage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class Main extends Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Logon" component={ Logon } />
					<Stack.Screen name="UserList" component={ UserList } />
					<Stack.Screen name="DetailedPage" component={ DetailedPage }/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}