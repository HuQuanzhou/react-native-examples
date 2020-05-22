import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image, 
    ScrollView, 
    StyleSheet
} from 'react-native';
import { color } from 'react-native-reanimated';

class Row extends Component{
    render(){
        return(
            <View style={style.textBox}>
                <View style={style.littleImg}></View>
                <Text style={style.text}>{this.props.words}</Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    textBox: {
        flex:1,
        flexDirection: 'row',
        //backgroundColor: '#ccf',
        alignItems: 'center',
        marginLeft: 15,
    },
    littleImg: {
        width:40,
        height: 40,
        backgroundColor: '#ccf',
        borderRadius: 40,
        borderColor: 'white',
        borderWidth: 10,
        marginTop: 1,
    },
    text: {
        fontSize: 15,
    },
})



export default class DetailedPage extends Component{
    constructor(props){
        super(props);
        this.state={
            saying: "意念婆娑，时间里推磨",
            school: "武汉工程大学",
            space: "作品",
            tryoneone: "tryoneone",
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imgBox}>
                    <Image
                        style={styles.img}
                        source={require("../images/goon.jpg")}
                    />
                </View>
                <View style={styles.others}>
                    <View style={styles.iconAndName}>
                        <View style={styles.icon}></View>
                        <ScrollView style={styles.selfInfo}>
                            <Text style={styles.name} >胡泉舟</Text>
                            <Text style={styles.userNum} >1625525664</Text>
                            <Text style={styles.sex} >男  重庆-万州 双子座</Text>
                        </ScrollView>
                    </View>
                    <View style={styles.list}>
                        <ScrollView style={styles.otherInfo}>
                            <Row words= {this.state.saying} />
                            <Row words= {this.state.school} />
                            <Row words= {this.state.space} />
                            <View style={styles.workBox}>
                                <Image style={styles.works} source={require("../images/1.jpg")}/>
                                <Image style={styles.works} source={require("../images/2.jpg")}/>
                                <Image style={styles.works} source={require("../images/3.jpg")}/>
                                <Image style={styles.works} source={require("../images/4.jpg")}/>
                            </View>
                            <View style={styles.workBox}>
                                <Image style={styles.works} source={require("../images/5.jpg")}/>
                                <Image style={styles.works} source={require("../images/6.jpg")}/>
                                <Image style={styles.works} source={require("../images/7.jpg")}/>
                                <Image style={styles.works} source={require("../images/8.jpg")}/>
                            </View>
                            <Row words= {this.state.tryoneone} />
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    workBox: {
        flexDirection: 'row',
        position: 'relative',
        left: 50,
        height: 80,
        width: 320,
    },
    works: {
        borderColor: 'white',
        borderWidth: 1,
        width: 80,
        height: 80,
        backgroundColor: 'skyblue',
    },
    container: {
        flex: 1,
        //backgroundColor: '#ccc',
    },
    imgBox: {
        height: 200,
        width: 500,
        //backgroundColor: 'green',
    },
    img: {
        height: 200,
    },
    others: {
        backgroundColor: 'white',
        flex: 1,
    },
    iconAndName: {
        //backgroundColor: 'red',
        position: "relative",
        height: 100,
        bottom: 50,
        flexDirection: "row",
        alignItems: 'center'
    },
    icon: {
        width: 90,
        height: 90,
        backgroundColor: 'skyblue',
        borderRadius: 100,
        marginLeft: 15,
    },
    selfInfo: {
        //backgroundColor: 'grey',
        height: 90,
        marginLeft: 15,
        marginTop: 30
    },
    name: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'white',
    },
    userNum: {
       
    },
    sex: {
        //backgroundColor: '#ccf'
    },
    list: {
        position: 'relative',
        bottom: 30
    },
    otherInfo: {

    },
})