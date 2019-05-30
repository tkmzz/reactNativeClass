import React, { PureComponent } from 'react'
import { View, FlatList } from 'react-native'
import { Button, Text } from 'native-base'



class Seasons extends PureComponent {
    state = {
        items: []
    }

    renderSeasons() {
        let items = []

        for (let i = 0; i < 20; i++) {
            const year = '20' + (i > 9 ? i : `0${i}`)
            items.push(
                year
            )
        }
        this.setState({ items: items })
    }

    componentDidMount() {
        this.renderSeasons()
    }

    render() {
        return (
            <View>
                <FlatList data={this.state.items}
                    keyExtractor={item => item}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <Button
                            style={{ margin: 10, flex: 1 }}
                            onPress={() => this.props.handleClick(item)}>
                            <Text>
                                {item}
                            </Text>
                        </Button>} />
            </View>
        );
    }
}

export default Seasons