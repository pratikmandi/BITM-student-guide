import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Feature coming soon...</Text>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFFFF'
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:30,
        justifyContent:'center',
        textAlign:'center'
    }
})