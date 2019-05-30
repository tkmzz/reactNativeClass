import React from 'react'
import { Text, Title, ListItem, Button, List } from 'native-base'
import { View } from 'react-native'

export default class Info extends React.Component {

    state = {
        year: 'oi',
    }

    constructor(props) {
        super(props)

        //this.redirectTo = this.redirectTo.bind(this)
    }

    componentDidMount() {
        this.setState({ year: 'year' })
    }

    static navigationOptions = (props) => {
        console.log(props)
        return {
            title: `${props.navigation.state.params.year} Season Info`,
        }
    }

    render() {
        return (
            <View>
                <Title style={{ marginTop: 40 }}>Choose the info you want to know</Title>


                <Button style={{ width: '80%', height: 100, margin: '10%', justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{}}>gffdfgdfsgf</Text>


                </Button>



                <Button style={{ width: '80%', height: 100, margin: '10%', justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{}}>gffdfgdfsgf</Text>


                </Button>


            </View>
        );

    }
}