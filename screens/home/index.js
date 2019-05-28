import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView, ScrollView } from 'react-navigation'


import Seasons from '../../components/Seasons'

export default class Home extends React.Component {

    constructor(props) {
        super(props)

        this.redirectTo = this.redirectTo.bind(this)
    }

    static navigationOptions = () => {
        return {
            title: 'Home',
        }
    }

    redirectTo(year) {
        this.props.navigation.navigate('Details', {
            year: year,
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Seasons handleClick={this.redirectTo} />
                </ScrollView>

            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


