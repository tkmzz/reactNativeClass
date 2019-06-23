import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'



const CustomBtn = props => {

    redirectTo = () => {
        props.redirectTo(props.title)
    }

    return (
        <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={this.redirectTo}>
            <View style={[styles.container]}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        width: '75%',
        height: 150,
        backgroundColor: '#e3e3e3'
    }
})

export default CustomBtn