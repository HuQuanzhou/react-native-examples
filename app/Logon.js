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
export default class LogOn extends Component {
	constructor(props){
		super(props);
		this.state = {
			notPassword: true
		}
  }
  
  onPressed = () => {
    const { navigate } = this.props.navigation;
    navigate('UserList');
  };

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
				<TouchableHighlight onPress={this.onPressed} underlayColor='#2196F3'  style={logOnStyle.logOnBtn}>
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