'use strict';

import React from 'react';
import PropTypes from 'prop-types';
let { View, StyleSheet, Text} = require('react-native');
import {Field} from './Field';


export class LinkComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  handleLayoutChange(e){
    let {x, y, width, height} = {... e.nativeEvent.layout};

    this.setState(e.nativeEvent.layout);
    //e.nativeEvent.layout: {x, y, width, height}.
  }


  render(){
    return(<Field {...this.props}>
      <View style={[{flexDirection: 'row', justifyContent: this.props.iconLeft? 'flex-start' :'space-between'},
       this.props.containerStyle]}
        onLayout={this.handleLayoutChange.bind(this)}>

          {(this.props.iconLeft)
            ? <View style={{alignSelf: 'flex-start'}}>{this.props.iconLeft}</View>
            : null
          }
        <Text
          style={this.props.labelStyle}>
            {this.props.label}
        </Text>

          {(this.props.iconRight)
            ? <View style={{alignSelf: 'flex-end'}}>{this.props.iconRight}</View>
            : null
          }
      </View>

    </Field>
  )
}

}

LinkComponent.propTypes = {
  labelStyle: PropTypes.array,
  containerStyle: PropTypes.array
}
