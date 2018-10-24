import React, {Component} from 'react';
import {Platform, StyleSheet, View,Animated} from 'react-native';
import { Svg } from 'expo';
const { Circle, Rect, Line,Text} = Svg;

export default class EasyGauge extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = { 
            OutOfFrame : (360/this.props.radius)*50,
            realangle : this.props.startAngle+((this.props.radius/this.props.max)*(this.props.value+((1/this.props.max)*this.props.value)))
        };
 
    }
  

  render() {
 
   

        this.state.realangle =  this.props.startAngle+((this.props.radius/this.props.max)*this.props.value);

        
    var Point = {
        x : (parseFloat(45)*Math.sin((this.state.realangle)*Math.PI/180)),  
        y : (parseFloat(45)*Math.cos((this.state.realangle)*Math.PI/180))};


    return (
      <View>
           <Svg height={this.props.height} width={this.props.width} viewBox="0 0 100 101">
           <Circle
            cx="50"
            cy={this.state.OutOfFrame-1}
            r="48"
            stroke="black"
            strokeWidth="1"
            fill="white"
          />

             <Circle
            cx="50"
            cy={this.state.OutOfFrame}
            r="45"
            stroke="black"
            strokeWidth="2.5"
            fill="white"
          />


          
          <Circle
            cx="50"
            cy={this.state.OutOfFrame}
            r="5"
            fill="red"
            stroke="red"
          />


           <Line
        x1={Point.x+50}
        y1={this.state.OutOfFrame-Point.y}
        x2="50"
        y2={this.state.OutOfFrame}
        stroke="red"

        strokeWidth="2"
    />

   




    <Text x="50"  width ="100"   textAnchor="middle"
        y={this.state.OutOfFrame+20} fontWeight ="bold" fontSize={8}>{this.props.value}</Text>
        </Svg>
      </View>
    );
  }
}
