import React from 'react'
import { SafeAreaView, ScrollView } from 'react-navigation'
import { List, ListItem, Text, Left, Right, Icon } from 'native-base'


export default class Details extends React.Component {

    state = {
        races: [],
    }

    componentDidMount() {
        const year = this.props.navigation.getParam('year')

        this.fetchFrom(year)
    }

    async fetchFrom(year) {
        try {
            const f1Api = await fetch(`http://ergast.com/api/f1/${year}.json`);
            const response = await f1Api.json();

            const raceList = response.MRData.RaceTable.Races

            this.setState({ races: raceList })
        } catch (err) {
            console.log("Deu ruim", err);
        }
    }

    static navigationOptions = () => {
        return {
            title: 'Details'
        }
    }

    renderRaceListItems() {

        let raceList = this.state.races
        let listItems = []

        for (let i = 0; i < (raceList.length) - 1; i++) {
            listItems.push(
                <ListItem key={`season-${i}`}>
                    <Left>
                        <Text >
                            {raceList[i].raceName}
                        </Text>
                    </Left>
                    <Right>
                        <Icon name='arrow-forward' />
                    </Right>

                </ListItem>
            )

        }
        return listItems;
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <List>
                        {this.renderRaceListItems()}
                    </List>
                </ScrollView>

            </SafeAreaView>
        )
    }


}