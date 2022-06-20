import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Logo() {
    return(
        <View>
        <View style={styles.containerLogo}/>
        <Image
         source={require('../../../assets/images/logo.png')}
         style={styles.imageLogo}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    imageLogo: {
        alignSelf:"center",
        marginTop:78,
        width: 250,
        height: 100,
        marginBottom:30
        // backgroundColor:"red"
      },
      containerLogo: {
        marginTop: -80,
        paddingTop: -80,
      },
})