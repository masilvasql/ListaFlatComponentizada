import {StyleSheet, StatusBar} from 'react-native'

export default StyleSheet.create({
    fonte:{
        fontSize: 25,
        fontWeight: 'bold',
        color:'#fff'
    },
    alinhamento:{
        paddingHorizontal: 35,
        marginTop: StatusBar.currentHeight,
    },
    card:{
        borderWidth: 2,
        borderColor: 'black',
        width:'100%',
        padding: 10,
        backgroundColor:'#34495e',
        elevation:30
    }
})