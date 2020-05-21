import React, { Component } from 'react';
import { 
	ScrollView, 
	Text, 
	View, 
	StyleSheet, 
	TextInput, 
	TouchableHighlight,
} from 'react-native';


//登录界面
class LogOn extends Component{
	constructor(props){
		super(props);
		this.state = {
			notPassword: true
		}
	}
	render(){
		return(
			<View style={logOnStyle.container}>
				<View style={logOnStyle.title}>
					<Text style={{fontSize: 100,color: '#fff', position: 'relative', top: 20}}>LogOn</Text>
				</View>
				<View style={logOnStyle.userName}>
					<TextInput
						placeholder='请输入用户名'
						style={logOnStyle.inputBox}
						keyboardType='number-pad'
						clearButtonMode='always'
					/>
				</View>
				<View style={logOnStyle.password}>
					<TextInput
						secureTextEntry={!this.state.imageState}
						style={logOnStyle.inputBox}
						placeholder='请输入密码'
						keyboardType='numbers-and-punctuation'
						clearButtonMode='always'
					/>
				</View>
				<TouchableHighlight onPress={()=>{this.pressed}} underlayColor='#2196F3'  style={logOnStyle.logOnBtn}>
					<View>
						<Text style={{fontSize: 16, color: 'white'}}>登录</Text>
					</View>	
				</TouchableHighlight>
				
			</View>
		)
	}
}
const logOnStyle = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white'
	},
	title: {
		marginTop: 10,
		backgroundColor: 'skyblue',
		height: 220,
		width: 220,
		justifyContent: 'flex-end',
		borderRadius: 200,
	},
	userName: {
		marginTop: 10,
	},
	inputBox: {
		//backgroundColor: 'green',
		height: 66,
		width: 370,
		textAlign: 'center',
	},
	password: {
		marginTop: 3,
	},
	logOnBtn: {
		backgroundColor: 'skyblue',
		marginTop: 30,
		width: 200,
		height: 60,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
})


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
class List	extends Component{
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


export default class Main extends Component {
	render() {
		return(
			<List />
		)
	}
}