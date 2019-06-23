import React from 'react'
import { View, StyleSheet } from 'react-native'

import CustomBtn from '../../components/CustomBtn/index'

export default class Info extends React.Component {

    state = {
        year: null,
    }

    componentDidMount() {
        this.setState({ year: this.props.navigation.getParam('year') })
    }

    static navigationOptions = (props) => {
        return {
            title: `${props.navigation.state.params.year} Season Menu`,
        }
    }

    redirectTo = title => {
        this.props.navigation.navigate(title, {
            year: this.state.year,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomBtn title={'Races'} redirectTo={this.redirectTo} />
                <CustomBtn title={'Drivers'} redirectTo={this.redirectTo} />
            </View>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})