import React, { Component } from 'react';
import { 
	ScrollView, 
	Text, 
	View, 
	StyleSheet, 
	TextInput, 
	TouchableHighlight,
} from 'react-native';

//成员
class Member extends Component{
	render(){
		return(
			<View style={styles.everone}>
				<View style={styles.icon}>
					<Text style={{fontSize: 20}}>胡</Text>
				</View>
				<View style={{justifyContent: 'center', marginLeft: 10,}}>
					<Text style={styles.name}>胡泉舟</Text>
					<Text style={styles.state}>[wifi在线]   一切尽在无言之中</Text>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	everone: {
		height: 80,
		flex: 1,
		flexDirection: 'row',
		//backgroundColor: 'green'
	},
	icon: {
		width: 60,
		height: 60,
		borderRadius: 50,
		backgroundColor: 'skyblue',
		margin:10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	name: {
		color: 'red',
		fontSize: 23
	},
	state: {
		color: '#1118',
		fontSize: 13
	},
	container: {

	},
})

//用户界面
export default class UserList	extends Component {
	render(){
		return(
			<ScrollView style={styles.container}>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
				<Member/>
			</ScrollView>
		)
	}
}