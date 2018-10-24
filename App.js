import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import EasyGauge from './easyGauge.js';

export default class App extends React.Component {


  constructor()
  {
    super();

    this.state = {angle : 0,angle2: 0};
  }


  render() {


    return (
      <View style={styles.container}>
        <EasyGauge value ={this.state.angle} startAngle = {0} min = {0} max = {360}   width = {200} height = {200} radius = {360} title ="Wie cool bin ich?"></EasyGauge>
        <Text style={{marginTop:10}}>Total: 360° | Start-Angle: 0 | Min-Value: 0 | Max-Value: 360 | Current-Value: {this.state.angle}</Text>

        <Button title ="ADD 10" onPress = {()=>{ this.setState({angle : this.state.angle+10}); }}></Button>

          <EasyGauge value ={this.state.angle2} startAngle = {270} min = {0} max = {10}   width = {200} height = {200} radius = {180} title ="Wie cool bin ich?"></EasyGauge>
          <Text style={{marginTop:10}}>Total: 180° | Start-Angle: 270 |  Min-Value: 0 | Max-Value: 10 | Current-Value: {this.state.angle2}</Text>


        <Button title ="ADD 1" onPress = {()=>{ this.setState({angle2 : this.state.angle2+1}); }}></Button>
        <Text>Github.com/Dimnez</Text>
      </View>
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
