'use strict';

import React from 'react';
import ReactNative from 'react-native';
let { View, StyleSheet, TextInput, Text, Picker, Dimensions} = ReactNative;
import {Field} from '../lib/Field';
import MultiSelect from 'react-native-multiple-select';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

var PickerItem = Picker.Item;

export const SCREEN_WIDTH = Dimensions.get("window").width;

export const SCREEN_X = (SCREEN_WIDTH - 10) / 10;

export class PickerSectionComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedItems: [],
      value: props.value || props.label,
    }
    this.pickerMeasures = {};
  }

  setValue(value){
    this.setState({value:value});
    if(this.props.onChange)      this.props.onChange(value);
    if(this.props.onValueChange) this.props.onValueChange(value);
  }
  handleLayoutChange(e){
    let {x, y, width, height} = {... e.nativeEvent.layout};

    this.setState(e.nativeEvent.layout);
    //e.nativeEvent.layout: {x, y, width, height}.
  }

  handleValueChange(value){// remove

    this.setState({value:(value && value!='')?value:this.props.label});

    if(this.props.onChange)      this.props.onChange(value);
    if(this.props.onValueChange) this.props.onValueChange(value);
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
    this.props.nav?
      typeof selectedItems == 'object' && selectedItems[0] !== '' && selectedItems[0] !== undefined?
        this.props.nav(selectedItems[0])
      : null
    : null;
    this.props.get?
      this.props.get(selectedItems)
    : null;

    this.setState({value:(selectedItems && selectedItems!='')?selectedItems:this.props.label});

    if(this.props.onChange) {
      this.props.onChange(selectedItems);
    }
    if(this.props.onValueChange) {
      this.props.onValueChange(selectedItems);
    }
  }

  render() {
    return (
      <View>
      <View 
          onLayout={this.handleLayoutChange.bind(this)}
          style={[
              this.props.containerStyle,
              this.props.label?{flexDirection: 'column'}: {flexDirection: 'row'}
            ]}>
          {(this.props.label)
            ?
            <View style={{flexDirection: 'row', justifyContent: this.props.iconLeft? 'flex-start' :'space-between'}}>
            {(this.props.iconLeft)
              ? <View style={{alignSelf: 'flex-start'}}>{this.props.iconLeft}</View>
              : null
            }
            <Text style={[{alignSelf: 'center', flexWrap: 'wrap', maxWidth: SCREEN_X * 7} ,this.props.labelStyle]}
              onLayout={this.handleLabelLayoutChange}
              onPress={this.handleFieldPress}
              suppressHighlighting={true}
              >{this.props.label}</Text>
              {(this.props.iconRight)
                  ? <View style={{alignSelf: 'flex-end'}}>{this.props.iconRight}</View>
                  : null
                }
            </View>
            : (this.props.iconLeft)
              ? <View style={{alignSelf: 'flex-start'}}>{this.props.iconLeft}</View>
              : null
          }
            <SectionedMultiSelect
            items={this.props.items} 
            single={!this.props.multiple}
            uniqueKey='id'
            subKey='children'
            selectText='Choose: '
            showDropDowns={true}
            readOnlyHeadings={true}
            onSelectedItemsChange={this.onSelectedItemsChange.bind(this)}
            selectedItems={this.state.selectedItems}
            // renderSelectText={(objs)=>{}}//objs: all props
              style={[
                this.props.inputStyle,
                {justifyContent: 'center', alignSelf: 'center'}
              ]}
          />
            {(this.props.label && this.props.iconRight)
                  ? <View style={{alignSelf: 'flex-end'}}>{this.props.iconRight}</View>
                  : null
                }
        </View>
        <Text style={{justifyContent: 'center', alignSelf: 'center'}}>
          {this.props.helpText}
        </Text>
        </View>
    );
  }
}

export class PickerComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedItems: [],
      value: props.value || props.label,
    }
    this.pickerMeasures = {};
  }

  setValue(value){
    this.setState({value:value});
    if(this.props.onChange)      this.props.onChange(value);
    if(this.props.onValueChange) this.props.onValueChange(value);
  }
  handleLayoutChange(e){
    let {x, y, width, height} = {... e.nativeEvent.layout};

    this.setState(e.nativeEvent.layout);
    //e.nativeEvent.layout: {x, y, width, height}.
  }

  handleValueChange(value){// remove

    this.setState({value:(value && value!='')?value:this.props.label});

    if(this.props.onChange)      this.props.onChange(value);
    if(this.props.onValueChange) this.props.onValueChange(value);
  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems: selectedItems });
    this.props.nav?
      typeof selectedItems == 'object' && selectedItems[0] !== '' && selectedItems[0] !== undefined?
        this.props.nav(selectedItems[0])
      : null
    : null;
    this.props.get?
      this.props.get(selectedItems)
    : null;

    this.setState({value:(selectedItems && selectedItems!='')?selectedItems:this.props.label});

    if(this.props.onChange)      this.props.onChange(selectedItems);
    if(this.props.onValueChange) this.props.onValueChange(selectedItems);
  };
  
  render() {
    const { selectedItems } = this.state;
    return (
      <View>
      <View 
          onLayout={this.handleLayoutChange.bind(this)}
          style={[
              this.props.containerStyle,
              this.props.label?{flexDirection: 'column'}: {flexDirection: 'row'}
            ]}>
          {(this.props.label)
            ?
            <View style={{flexDirection: 'row', justifyContent: this.props.iconLeft? 'flex-start' :'space-between'}}>
            {(this.props.iconLeft)
              ? <View style={{alignSelf: 'flex-start'}}>{this.props.iconLeft}</View>
              : null
            }
            <Text style={[{alignSelf: 'center', flexWrap: 'wrap', maxWidth: SCREEN_X * 7} ,this.props.labelStyle]}
              onLayout={this.handleLabelLayoutChange}
              onPress={this.handleFieldPress}
              suppressHighlighting={true}
              >{this.props.label}</Text>
              {(this.props.iconRight)
                  ? <View style={{alignSelf: 'flex-end'}}>{this.props.iconRight}</View>
                  : null
                }
            </View>
            : (this.props.iconLeft)
              ? <View style={{alignSelf: 'flex-start'}}>{this.props.iconLeft}</View>
              : null
          }
        <MultiSelect
          hideTags
          items={this.props.items}
          single={!this.props.multiple}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText=" Pick Items"
          searchInputPlaceholderText=" Search Items..."
          onChangeInput={ (text)=> {}}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#008080"
          selectedItemIconColor="#008080"
          itemTextColor="#000"
          displayKey="name"
          findKey="find"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Choose"
          style={{paddingHorizontal: 20}}
        />
            {(this.props.label && this.props.iconRight)
                  ? <View style={{alignSelf: 'flex-end'}}>{this.props.iconRight}</View>
                  : null
                }
        </View>
        <View style={this.props.tagStyle}>
          {this.multiSelect?this.multiSelect.getSelectedItemsExt(selectedItems): <Text></Text>}
        </View>
        <Text style={{justifyContent: 'center', alignSelf: 'center'}}>
          {this.props.helpText}
        </Text>
        </View>
    );
  }
}

  export class PickerComponentOld extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        value: props.value || props.label,
      }
      this.pickerMeasures = {};
    }
    setValue(value){
      this.setState({value:value});
      if(this.props.onChange)      this.props.onChange(value);
      if(this.props.onValueChange) this.props.onValueChange(value);
    }
    handleLayoutChange(e){
      let {x, y, width, height} = {... e.nativeEvent.layout};

      this.setState(e.nativeEvent.layout);
      //e.nativeEvent.layout: {x, y, width, height}.
    }

    handleValueChange(value){

      this.setState({value:(value && value!='')?value:this.props.label});

      if(this.props.onChange)      this.props.onChange(value);
      if(this.props.onValueChange) this.props.onValueChange(value);
    }

    _scrollToInput (event) {

      if (this.props.onFocus) {
        let handle = ReactNative.findNodeHandle(this.refs.inputBox);

        this.props.onFocus(
          event,
          handle
        )
      }

//      this.refs.picker.measure(this.getPickerLayout.bind(this));

    }
    _togglePicker(event){
        //this.setState({isPickerVisible:!this.state.isPickerVisible});
        //this._scrollToInput(event);
    }
    render(){

      return(<View><Field
        {...this.props}
        ref='inputBox'
        onPress={this.props.onPress}
        >
        <View 
          onLayout={this.handleLayoutChange.bind(this)}
          style={[
              this.props.containerStyle,
              this.props.label?{flexDirection: 'column'}: {flexDirection: 'row'}
            ]}>
          {(this.props.label)
            ?
            <View style={{flexDirection: 'row', justifyContent: this.props.iconLeft? 'flex-start' :'space-between'}}>
            {(this.props.iconLeft)
              ? <View style={{alignSelf: 'flex-start'}}>{this.props.iconLeft}</View>
              : null
            }
            <Text style={[{alignSelf: 'center'} ,this.props.labelStyle]}
              onLayout={this.handleLabelLayoutChange}
              onPress={this.handleFieldPress}
              suppressHighlighting={true}
              >{this.props.label}</Text>
              {(this.props.iconRight)
                  ? <View style={{alignSelf: 'flex-end'}}>{this.props.iconRight}</View>
                  : null
                }
            </View>
            : (this.props.iconLeft)
              ? <View style={{alignSelf: 'flex-start'}}>{this.props.iconLeft}</View>
              : null
          }
            <Picker ref='picker'
              {...this.props.pickerProps}
              selectedValue={this.state.value}
              onValueChange={this.handleValueChange.bind(this)}
              style={[
                this.props.inputStyle,
                {justifyContent: 'center', alignSelf: 'center'}
              ]}
              >
              {Object.keys(this.props.options).map((value) => (
                <PickerItem
                  key={value}
                  value={value}
                  label={this.props.options[value]}
                />
            ), this)}

            </Picker>
            {(this.props.label && this.props.iconRight)
                  ? <View style={{alignSelf: 'flex-end'}}>{this.props.iconRight}</View>
                  : null
                }
        </View>
        </Field>


    </View>
      )
    }

  }



    let formStyles = StyleSheet.create({
      form:{

      },
      alignRight:{
         marginTop: 7, position:'absolute', right: 10
      },
      noBorder:{
        borderTopWidth: 0,
        borderBottomWidth: 0
      },
      separatorContainer:{
        // borderTopColor: '#C8C7CC',
        // borderTopWidth: 1,
        paddingTop: 35,
        borderBottomColor: '#C8C7CC',
        borderBottomWidth: 1,

      },
      separator:{

        paddingLeft: 10,
        paddingRight: 10,
        color: '#6D6D72',
        paddingBottom: 7

      },
      fieldsWrapper:{
        // borderTopColor: '#afafaf',
        // borderTopWidth: 1,
      },
      horizontalContainer:{
        flexDirection: 'row',

        justifyContent: 'flex-start'
      },
      fieldContainer:{
        borderBottomWidth: 1,
        borderBottomColor: '#C8C7CC',
        backgroundColor: 'white',
        justifyContent: 'center',
        height: 45
      },
      fieldValue:{
        fontSize: 34/2,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight:10,
        paddingTop: 4,
        justifyContent: 'center',

        color: '#C7C7CC'
      },
      fieldText:{
        fontSize: 34/2,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        lineHeight: 32
      },
      input:{
        paddingLeft: 10,
        paddingRight: 10,

      },
      helpTextContainer:{
        marginTop:9,
        marginBottom: 25,
        paddingLeft: 20,
        paddingRight: 20,

      },
      helpText:{
        color: '#7a7a7a'
      }
    });
