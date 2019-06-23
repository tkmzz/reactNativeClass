import React from 'react'
import { SafeAreaView, ScrollView } from 'react-navigation'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { List, ListItem, Text, Left, Body, Right } from 'native-base'


export default class Drivers extends React.Component {

    state = {
        drivers: [],
        loading: true
    }

    componentDidMount() {
        const year = this.props.navigation.getParam('year')

        this.searchDrivers(year)
    }

    async searchDrivers(year) {
        try {
            const f1Api = await fetch(`http://ergast.com/api/f1/${year}/drivers.json`);
            const response = await f1Api.json();
            const driverList = response.MRData.DriverTable.Drivers

            this.setState({ drivers: driverList, loading: false })
        } catch (err) {
            console.log("Deu ruim", err);
        }
    }

    static navigationOptions = (props) => {
        return {
            title: `Season ${props.navigation.state.params.year} Drivers List`,
        }

    }

    renderDriversListItems() {

        let driverList = this.state.drivers
        let listItems = []

        for (let i = 0; i < (driverList.length) - 1; i++) {
            listItems.push(
                <ListItem key={`season-${i}`}>
                    <Left>
                        <Text >
                            {driverList[i].givenName} {driverList[i].familyName}
                        </Text>
                    </Left>
                    <Body>
                        <Text>
                            {driverList[i].nationality}
                        </Text>
                    </Body>
                    <Right>
                        <Text>
                            {driverList[i].code}
                        </Text>
                    </Right>
                </ListItem>
            )

        }
        return listItems;
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <List>
                        <ListItem>
                            <Left>
                                <Text style={styles.txt}>
                                    Drivers Name
                                </Text>
                            </Left>
                            <Body>
                                <Text style={styles.txt}>
                                    Nationality
                                </Text>
                            </Body>
                            <Right>
                                <Text style={styles.txt}>
                                    Code
                                </Text>
                            </Right>
                        </ListItem>
                        {this.renderDriversListItems()}
                    </List>
                </ScrollView>
                {this.state.loading === true ? <ActivityIndicator size='large' color='#333' style={styles.loadingBar} /> : null}
            </SafeAreaView>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loadingBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignSelf: 'center',
    },
    txt: {
        fontWeight: 'bold'
    }
})