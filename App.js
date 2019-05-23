import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'


import Seasons from './components/Seasons/index'

export default class App extends React.Component {

  async fetchFrom(year) {
    try {
      const f1Api = await fetch(`http://ergast.com/api/f1/${year}.json`);
      const response = await f1Api.json();
      console.log(`Houve ${response.MRData.RaceTable.Races.length} corridas em ${year}!`)
    } catch (err) {
      console.log("Deu ruim", err);
    }
  }

  getData(season) {
    console.log(season)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Seasons handleClick={this.fetchFrom} />
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


