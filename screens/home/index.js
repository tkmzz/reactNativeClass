import React from 'react'
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
        this.props.navigation.navigate('Info', {
            year: year,
        })
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Seasons handleClick={this.redirectTo} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}



