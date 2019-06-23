import React from 'react'
import { SafeAreaView, ScrollView } from 'react-navigation'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { List, ListItem, Text, Left, Body } from 'native-base'


export default class Races extends React.Component {

    constructor(props) {
        super(props)

    }

    state = {
        races: [],
        loading: true,
    }

    componentDidMount() {
        const year = this.props.navigation.getParam('year')

        this.searchRaces(year)
    }

    async searchRaces(year) {
        try {
            const f1Api = await fetch(`http://ergast.com/api/f1/${year}.json`);
            const response = await f1Api.json();
            const raceList = response.MRData.RaceTable.Races

            this.setState({ races: raceList, loading: false })
        } catch (err) {
            console.log("Deu ruim", err);
        }
    }

    static navigationOptions = (props) => {
        return {
            title: `Season ${props.navigation.state.params.year} Races List`,
        }

    }

    renderRaceListItems() {

        let raceList = this.state.races
        let listItems = []

        for (let i = 0; i < (raceList.length) - 1; i++) {
            listItems.push(
                <ListItem key={`season-${i}`}>
                    <Left>
                        <Text>
                            {raceList[i].raceName}
                        </Text>
                    </Left>
                    <Body>
                        <Text>
                            {raceList[i].Circuit.Location.locality}
                        </Text>
                    </Body>
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
                                    Racetrack
                                </Text>
                            </Left>
                            <Body>
                                <Text style={styles.txt}>
                                    City
                                </Text>
                            </Body>
                        </ListItem>
                        {this.renderRaceListItems()}
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
        alignSelf: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    txt: {
        fontWeight: 'bold'
    }
})