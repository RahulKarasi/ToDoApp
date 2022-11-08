import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.headerBody}>
        <TouchableOpacity onPress={()=> props.navigation.goBack()} >
        <Image style={styles.backBtn} source={require('../assets/back.png')} />
        </TouchableOpacity>
        <Text style={styles.headingTxt}>{props.heading}</Text>
        <View style={styles.empty}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headerBody:{
        backgroundColor:'white',
        height:57,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
    },
    backBtn:{
        height:24,
        width:24
    },
    empty:{
        width:30
    },
    headingTxt:{
        color:'#301F6B',
        fontSize:18,
        fontWeight:'500'
    }
})

export default Header