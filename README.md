Quick View of Changes
===============

## New
* Searchable Items
* Use as Navigation
* Trigger another function
* Use as form field
* Single and Multiple selection restriction
* Custom styles and colors

> You can skip this to details on the [usage of react-native-form-generator](https://github.com/emexrevolarter/react-native-form-generator/blob/master/README.md#react-native-form-generator) by the Designer, OR keep reading to discover the improved performance on this wonderful plugin.

## Let's Go!
We began by styling the fields. The fields done so far are: 
1. Input Field (src/lib/InputComponent.js)
    1. Input field: If label is set, the field is aligned in column, otherwise row. Attributes are: helpText, placeholder, label, labelStyle, containerStyle, inputStyle, iconLeft (with style attr), iconRight (with style attr).
1. Link Field (src/lib/LinkComponent.js)
    1. Display field: The field is always aligned in row. Attributes are: helpText, label, labelStyle, containerStyle, iconLeft (with style attr), iconRight (with style attr).
1. Switch Field (src/lib/SwitchComponent.js)
    1. Switch field: The field is always aligned in row. Attributes are: helpText, label, labelStyle, containerStyle, switchStyle, iconLeft (with style attr), iconRight (with style attr).
1. Picker Field (src/lib/PickerComponent.android.js & src/fields/PickerField.android.js)
    1. Picker field: Modified to include search function.
        1. types: PickerField, PickerSectionField
            If label is set, the field is aligned in column, otherwise row. Attributes are: helpText, placeholder, label, labelStyle, containerStyle, items, section (true |false), multiple (true | false), iconLeft (with style attr), iconRight (with style attr), nav (func to redirect to another page; use only when multiple is false), get (func to set selected array to a state), tagStyle (only for PickerField).

Now, you can add custom style as you desire. Below are some screen captures of the performance by the pickers.

### Single Picker
Select single Item and nothing more than that. It comes with searchable items too. Do you wish to turn your Picker to Navigation? This is excellent for you. Just attach your navigation function, and boom, the User is off to the requested page immediately the Item is selected. More so, the key can be returned by same function for other purposes.

![Single Picker: emexrevolarter](https://github.com/emexrevolarter/liked-files/blob/master/assets/gif/single-picker.gif)

### Multiple Picker
Select multiple Items, with the ability to remove selected Items you wish to exclude. It comes with searchable items too. Same goes here in terms of Navigation capabilities in Single Picker above.

![Multiple Picker: emexrevolarter](https://github.com/emexrevolarter/liked-files/blob/master/assets/gif/multiple-picker.gif)

### Single Picker (in form)
Same as Single Picker, with the exception that this is a form element, since form returns its value. It is also searchable.

![Single Picker in form: emexrevolarter](https://github.com/emexrevolarter/liked-files/blob/master/assets/gif/single-picker-in-form.gif)

### Multiple Picker (in form)
Same as Multiple Picker, with the exception that this is a form element, since form returns its value. It is also searchable.

![Multiple Picker in form: emexrevolarter](https://github.com/emexrevolarter/liked-files/blob/master/assets/gif/multiple-picker-in-form.gif)

> It is Note worthy, pay attention to the change in the structure of the object **items**; the key `find` was added.

### e.g items for PickerField
   
   `items={[
    {  
      name: "<Text>[icon] Fruits</Text>",
      id: 'fruits',
      find: 'Fruit'
    }
   ]}`


### e.g section items for PickerSectionField
   
   `items={[
    {  
      name: "<Text>[icon] Fruits</Text>",
      find: 'Fruit',
      id: 0,
      children: [{
          name: "<Text>[icon] Apple Fruits</Text>",
          id: 10,
          find: 'Apple'
        },{
          name: "<Text>[icon] Kiwi Fruits</Text>",
          id: 16,
          find: 'Kiwi'
        }]
    },
   ]`

# Usage Example Code
Follow the link to view (or use) the included Component. Any other Component(s) used bu not included can easily be created by you.
Note that this time,
* only stand alone (single) has attribute: nav
* stand alone's (single and multiple) have attributes: get, and multiple
* form field (single and multiple) have attributes: section, and multiple

> [Single Picker (stand alone)](https://github.com/emexrevolarter/liked-files/blob/master/components/ListComponent.js)
    
    `<EmexSearchableList items={items}
          nav={this.openPage} // use only when multiple is false
          get={this.getList} // array
          label='Simple Picker (can be multiple select too)'
          multiple={false}
          helpText='**ACTION: triggers function, e.g opens selected page'
          containerStyle={{backgroundColor: '#ff0000', minHeight: 100, borderRadius: 3, paddingHorizontal: 5}}
          labelStyle={{color: '#00ff00', paddingBottom: 10}}
          tagStyle={{backgroundColor: '#8B0000'}}
          iconLeft={
            <IconSolid icon='amazon'
              size={20}
              style={
                {color:"#61d062", width: SCREEN_X}
              }
            />
          } /> `
    
> [Multiple Picker (Stand alone)](https://github.com/emexrevolarter/liked-files/blob/master/components/ListComponent.js)
    
    '
    <EmexSectionSearchableList items={itemsSec}
          //nav={this.openPage} // use only when multiple is false
          get={this.getList} // array
          label='Picker Sections (multiple select is active)'
          multiple={true}
          helpText='**ACTION: sets array of selected items'
          containerStyle={[{backgroundColor: '#ff0000', minHeight: 50, borderRadius: 3}, AppStyles.boxShadow]}
          labelStyle={[{color: '#00ff00'}]}
          iconLeft={
            <IconSolid icon='amazon'
              size={20}
              style={[
                {color:"#61d062", width: SCREEN_X}
              ]}
            />
          }
         />
    '
        
> [Single Picker (in form)](https://github.com/emexrevolarter/liked-files/blob/master/components/FormExamComponent.js)
    
    '<PickerField ref='unit'
          section={false}
          multiple={false}
          label='Single select'
          
      
          items = {[
            {
              id: 'Home',
              find: 'Home',
            name: <Text><IconSolid icon='home' size={15} style={[ {color:"#800000", width: SCREEN_X}]} /> Home</Text>,
          }, {
            id: 'About',
            find: 'About',
            name: <Text><IconSolid icon='user' size={15} style={[ {color:"#800000", width: SCREEN_X}]} /> About</Text>,
          }, {
            id: 'Settings',
            find: 'Settings',
            name: <Text><IconSolid icon='cog' size={15} style={[ {color:"#800000", width: SCREEN_X}]} /> Setting</Text>,
          }, {
            id: 'Form',
            find: 'Form',
            name: 'Form',
          }, {
            id: ' users',
            find: 'Users',
            name: 'Users',
          }, {
            id: ' editors',
            find: 'Editors',
            name: 'Editors',
          }, {
            id: ' premium',
            find: 'Premium',
            name: 'Premium',
          }, {
            id: ' accounts',
            find: 'Accounts',
            name: 'Accounts',
          }, {
            id: ' plugins',
            find: 'Plugins',
            name: 'Plugins',
          }
          ]}

          helpText='Choose any Service'
          containerStyle={[{backgroundColor: '#ff0000', minHeight: 100, borderRadius: 3, paddingHorizontal: 5}, AppStyles.boxShadow]}
          labelStyle={[{color: '#00ff00', paddingBottom: 10}]}
          tagStyle={{backgroundColor: '#f00'}}
          iconLeft={
            <IconSolid icon='cart-arrow-down'
              size={20}
              style={[
                {color:"#61d062", width: SCREEN_X}
              ]}
            />
          }
          />'
    

> [Multiple Picker (in form)](https://github.com/emexrevolarter/liked-files/blob/master/components/FormExamComponent.js)
    
    '<PickerField ref='multiple'
          section={true}
          multiple={true}
          label='Sectioned multiple select'
          items = {[
            {  
              name: "Home of Fruits",
              find: 'Fruit',
              id: 0,
              children: [{
                  name: <Text><IconSolid icon='home' size={15} style={[ {color:"#800000", width: SCREEN_X}]} /> Home</Text>,
                  id: ' Home',
                  find: 'Home'
                },{
                  name: "Strawberry",
                  id: ' Strawberry',
                  find: 'Strawberry'
                },{
                  name: "Pineapple",
                  id: ' Pineapple',
                  find: 'Pineapple'
                },{
                  name: "Banana",
                  id: ' Banana',
                  find: 'Banana'
                },{
                  name: "Watermelon",
                  id: ' Watermelon',
                  find: 'Watermelon'
                },{
                  name: "Kiwi fruit",
                  id: ' Kiwi',
                  find: 'Kiwi'
                }]
            },
            {
              name: "Gems",
              find: 'Gems',
              id: 1,
              children: [{
                  name: "Quartz",
                  id: ' Quartz',
                  find: 'Quartz'
                },{
                  name: "Zircon",
                  id: ' Zircon',
                  find: 'Zircon'
                },{
                  name: "Sapphire",
                  id: ' Sapphire',
                  find: 'Sapphire'
                },{
                  name: "Topaz",
                  id: ' Topaz',
                  find: 'Topaz'
                }]
            },
            {
              name: "Plants",
              find: 'Plants',
              id: 2,
              children: [{
                  name: "Spinach",
                  id: ' Spinach',
                  find: 'Spinach'
                },{
                  name: "Yucca",
                  id: ' Yucca',
                  find: 'Yucca'
                },{
                  name: "Monsteria",
                  id: ' Monsteria',
                  find: 'Monsteria'
                },{
                  name: "Palm",
                  id: ' Palm',
                  find: 'Palm'
                }]
            },
          ]}  
          helpText='Choose any Fruit'
          containerStyle={[{backgroundColor: '#ff0000', minHeight: 100, borderRadius: 3, paddingHorizontal: 5}, AppStyles.boxShadow]}
          labelStyle={[{color: '#00ff00', paddingBottom: 10}]}
          iconLeft={
            <IconSolid icon='cart-plus'
              size={20}
              style={[
                {color:"#61d062", width: SCREEN_X}
              ]}
            />
          }
          />'

# Dependencies
The two plugins that made all these possible are stated below. Include them in the node_modules of your App to replace the existing ones (if you have installed them; if not, install first, then replace).

[react-native-multiple-select](packages/react-native-multiple-select)

[react-native-sectioned-multi-select](packages/react-native-sectioned-multi-select)


# More Benefits
We thank you for reading this far. You view this great Activity Indicator created by us; all for free.

![Activity Indicator by emexrevolarter](https://github.com/emexrevolarter/liked-files/blob/master/assets/gif/activity-indicator.gif)

[Get this Awesome Indicator for FREE](https://github.com/emexrevolarter/liked-files/blob/master/components/IndicatorComponent.js)




React Native Form Generator
================

Generate forms with native look and feel in a breeze

[![NPM](https://nodei.co/npm/react-native-form-generator.png)](https://nodei.co/npm/react-native-form-generator/)


![rnformgendatetimefields](https://cloud.githubusercontent.com/assets/107390/16767512/1dfbf33c-4840-11e6-8085-1521b6d0c3ce.gif)

![react-native-form-generator](https://cloud.githubusercontent.com/assets/107390/12499709/edc1c298-c07a-11e5-916c-394de83ebe51.gif)

## Components
* Picker
* DatePicker
* TimePicker
* Input
* Link
* Separator
* Switch

## Features
* Android and IOS support, Yeah Baby!
* Pleasant Defaults, totally overridable
* Doesn't have dependencies
* Use your own icon pack
* Easy to use and clean, react style syntax
* Automatic events handling
* Supports custom fields and styles without adding any weird syntax (just create a react component)
* Applies by default the current OS style
* Inspired by tcomb, the good parts
* Performances: just the field changed gets a setState
* You don't need to create a 'Model' or a 'Struct' that contains your data, just create a form component (the React's way)
* Validate InputFields based on keyboardType (can be overridden using validationFunction)
* Multiple validators
* Reset/Set Fields programmatically (setValue, setDate, setTime, focus)
* Custom Wrapper for Picker & DatePicker Components (iOS Only)

[My blogpost about React Native Form Generator](https://medium.com/@michaelcereda/react-native-forms-the-right-way-315802f989d6#.p9oj79vt3)

## Installation
```
    npm install --save react-native-form-generator
```
## I'm actively working on this project

* Pull requests are very very welcome. They make my day ;).
* Master should be considered 'unstable' even if I do my best to keep it nice and safe.
* Every release has its own branch.
* Slider hasn't been created.
* I have to document the code properly and do some housekeeping, i apologize in advance.

## Example

Please check the folder _examples_ for an always up to date use case.

the example below generates the form you see in the animation
```javascript

/*
This is a view i use in a test app,
very useful to list all the use cases
*/

import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,ScrollView,
} from 'react-native';


import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

export class FormView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formData:{}
    }
  }
  handleFormChange(formData){
    /*
    formData will contain all the values of the form,
    in this example.

    formData = {
    first_name:"",
    last_name:"",
    gender: '',
    birthday: Date,
    has_accepted_conditions: bool
    }
    */

    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(e, component){
    //console.log(e, component);
  }
  openTermsAndConditionsURL(){

  }
  render(){
    return (<ScrollView keyboardShouldPersistTaps={true} style={{paddingLeft:10,paddingRight:10, height:200}}>
      <Form
        ref='registrationForm'
        onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        label="Personal Information">
        <Separator />
        <InputField
          ref='first_name'
          label='First Name'
          placeholder='First Name'
          helpText={((self)=>{

            if(Object.keys(self.refs).length !== 0){
              if(!self.refs.registrationForm.refs.first_name.valid){
                return self.refs.registrationForm.refs.first_name.validationErrors.join("\n");
              }

            }
            // if(!!(self.refs && self.refs.first_name.valid)){
            // }
          })(this)}
          validationFunction={[(value)=>{
            /*
            you can have multiple validators in a single function or an array of functions
             */

            if(value == '') return "Required";
            //Initial state is null/undefined
            if(!value) return true;
            // Check if First Name Contains Numbers
            var matches = value.match(/\d+/g);
            if (matches != null) {
                return "First Name can't contain numbers";
            }

            return true;
          }, (value)=>{
            ///Initial state is null/undefined
            if(!value) return true;
            if(value.indexOf('4')!=-1){
              return "I can't stand number 4";
            }
            return true;
          }]}
          />
        <InputField ref='last_name' placeholder='Last Name'/>
        <InputField
          multiline={true}
          ref='other_input'
          placeholder='Other Input'
          helpText='this is an helpful text it can be also very very long and it will wrap' />
        <Separator />
        <LinkField label="test test test" onPress={()=>{}}/>
        <SwitchField label='I accept Terms & Conditions'
          ref="has_accepted_conditions"
          helpText='Please read carefully the terms & conditions'/>
        <PickerField ref='gender'
          label='Gender'
          options={{
            "": '',
            male: 'Male',
            female: 'Female'
          }}/>
          <DatePickerField ref='birthday'
          minimumDate={new Date('1/1/1900')}
          maximumDate={new Date()}
          placeholder='Birthday'/>
        <TimePickerField ref='alarm_time'
      placeholder='Set Alarm'/>
        <DatePickerField ref='meeting'
          minimumDate={new Date('1/1/1900')}
          maximumDate={new Date()} mode="datetime" placeholder='Meeting'/>
        </Form>
        <Text>{JSON.stringify(this.state.formData)}</Text>

      </ScrollView>);
    }
  }

```

## Form
Form automatically attaches on change events so you just have to attach an handle to the onFocus attibute of Form to monitor all the changes.

It's just a wrapper that allows you to attach onFocus (used to track focus events and keyboard events) and onChange (used to track changes in every field)

## Fields
#### Common Rules
* __Every__ field that has to propagate its value in the form __MUST__ have a ref attribute. (Separator and LinkField don't have a ref).
Check the example to understand the use of the ref attribute.
* All the components provided use _Field_ as wrapper in order to have the following props.

| Prop (parameters) | Description |
| --- | --- |
| helpText | String shown as text under the component |
| helpTextComponent | Custom component that replaces the one provided |
| onPress | onPress method |


### Separator
```javascript
  <Separator
    label="Example" // optional: if present it will show the text
    />
```

### InputField
Input fields can be used to receive text, you can add icons (a react component) to the left and the right side of the field.

InputField can validate values based on keyboardType property, validation is not "aggressive", just changes a value inside the class, you can access the value using the ref (ex. this.ref.example_input_field.valid).  
InputField automatically provides the attibutes _valid_ and _validationErrors_ to guarantee full control to the developer.

you can customize your validation function by adding a _validationFunction_ prop to the component. _validationFunction_ supports also an array of validators.

#### Creating a validator
Validators are simple functions have one paramenter (value) and that return true or a string containing an error.

```javascript
let workingValidator = (value)=>{
  if(value == '') return "Required";
  //Initial state is null/undefined
  if(!value) return true;
  var matches = value.match(/\d+/g);
  if (matches != null) {
    return "First Name can't contain numbers";
  }

  return true;
}
```

_react-native-form-generator_ doesn't depend on any icon library, that gives you freedom of adding any icon or react component you want.

look at the example here.

![react-native-form-generator-inputfield](https://cloud.githubusercontent.com/assets/107390/12533401/1f6d1e7c-c1fd-11e5-96d0-aeba9a313ab9.gif)

```javascript
  <InputField
    label='Example' // if label is present the field is rendered with the value on the left (see First Name example in the gif), otherwise its rendered with textinput at full width (second name in the gif).
    ref='example_input_field' // used in onChange event to collect the value
    value='default_value' // used as initial value
    keyboardType = '' // undefined, 'email-address',
    validationFunction = {(value)=>{return true;}}
    iconRight={
      <Icon name='checkmark-circled'
        size={30}
        style={[
          {marginTop:7, color:"#61d062" },
          ((self)=>{
            //i can change the style of the component related to the attibute of example_input_field
            if(!!(self.refs && self.refs.example_input_field)){
              if(!self.refs.example_input_field.valid) return {color:'#d52222'}
            }
            }
          )(this)]}
        />
    }  //React Component
    />
```
All the props are passed down to the underlying TextInput Component

| Prop (parameters) | Description |
| --- | --- |
| label | Text to show in the field, if exists will move the textinput on the right, providing also the right alignment |
| iconLeft | React component, shown on the left of the field, the component needs to have a prop size to allow the inputText to resize properly  |
| iconRight | React component, shown on the right of the field, the component needs to have a prop size to allow the inputText to resize properly  |
| validationFunction | Function or array of functions, used to pass custom validators to the component|
| keyboardType | possible values: __underfined__, __email-address__|

| ref methods | Description |
| --- | --- |
| setValue | Sets the value programmatically |
| focus | Focus the textinput component |


### SwitchField

| Prop (parameters) | Description |
| --- | --- |
| onValueChange(value) | triggered at every value change, returns the new value of the field|
| value | Initial value of the component (Boolean)|


### PickerField
| Prop (parameters) | Description |
| --- | --- |
| onValueChange(value) | triggered at every value change, returns the new value of the field|
| value | Initial value of the component|
| options=[{label:"test",value="Test"},...] | All the possible options, array of objects|
| iconRight | React component, shown on the left of the text field (i suggest Ionicons 'ios-arrow-right' for a nice iOS effect)  |
| pickerWrapper | Optional, Custom wrapper of the picker, check the example  |

### DatePickerField
Every prop is passed down to the underlying DatePickerIOS/DatePickerAndroid component.

| Prop (parameters) | Description |
| --- | --- |
| onValueChange(date) | triggered at every value change, returns the new value of the field|
| date | Initial date of the component, defaults to (new Date()) |
| iconRight | React component, shown on the left of the text field (i suggest Ionicons 'ios-arrow-right' for a nice iOS effect)  |
| dateTimeFormat | Optional, Custom date formatter |
| pickerWrapper | Optional, Custom wrapper of the picker, check the example  |
| prettyPrint | Boolean, if true the component returns a string formatted using dateTimeFormat, if false a Date object is returned |
| placeholderComponent | Substitutes the component used to render the placeholder |
| placeholderStyle | Used to style the placeholder |
| valueStyle | Used to style the field's value |

### TimePickerField
Every prop is passed down to the underlying DatePickerIOS/DatePickerAndroid component.
Mode is set to 'time'

| Prop (parameters) | Description |
| --- | --- |
| onValueChange(date) | triggered at every value change, returns the new value of the field|
| date | Initial date of the component, defaults to (new Date()) |
| iconRight | React component, shown on the left of the text field (i suggest Ionicons 'ios-arrow-right' for a nice iOS effect)  |
| dateTimeFormat | Optional, Custom date formatter |
| pickerWrapper | Optional, Custom wrapper of the picker, check the example  |
| prettyPrint | Boolean, if true the component returns a string formatted using dateTimeFormat, if false a Date object is returned |
| placeholderComponent | Substitutes the component used to render the placeholder |
| placeholderStyle | Used to style the placeholder |
| valueStyle | Used to style the field's value |

### LinkField
Every prop is passed down to the underlying DatePickerIOS component.

| Prop (parameters) | Description |
| --- | --- |
| label | Text to show in the field |
| iconLeft | React component, shown on the left of the text field  |
| iconRight | React component, shown on the left of the text field (i suggest Ionicons 'ios-arrow-right' for a nice iOS effect)  |

### KeyboardEvents
react-native-form-generator ships with an implementation ok KeyboardAwareScrollView that make handling keyboard events a breeze.
check here https://medium.com/@michaelcereda/react-native-forms-the-right-way-315802f989d6#.p9oj79vt3

![react-native-form-generator-keyevents](https://cloud.githubusercontent.com/assets/107390/12499708/edb63838-c07a-11e5-9fe4-87979285ccc0.gif)

### Custom Fields
With react-native-form-generator is extremely easy to create your own custom fields.
You just need to know that:
1. Every field is a react component
2. Evey field will receive 3 props from the Form object:
   - fieldRef: contains the reference of the field (workaround on a react-native bug).
   - onChange: must be called every time i want to update the values inside the form component. (required)
   - onValueChange: can be used whenever you prefer to pass the values to another component.

Example
```javascript
'use strict';
import {Field} from '../lib/Field';

export class SimpleInputField extends React.Component{
  constructor(props){
    super();
    }
  }

  handleChange(event){
    var value = event.nativeEvent.text;

    this.setState({value:value});

    // This updates values in form everytime i update
    if(this.props.onChange)      this.props.onChange(this.props.fieldRef, value);
    if(this.props.onValueChange) this.props.onValueChange(value);
  }

  render(){
    return(<Field>
        <TextInput
          {...this.props}
          ref='inputBox'

          onChange={this.handleChange.bind(this)}

          placeholder={this.props.placeholder}
          value={this.state.value}
          />
    </Field>
  )
}

}
```
### Wrapping fields
You can decide to wrap every field in a component to mantain design uniformity and avoid repetitions (ex. Icons ?!).

Battle tested example
```javascript
import {PickerField, LinkField} from 'react-native-form-generator';
import Icon from 'react-native-vector-icons/Ionicons';

let {
  StyleSheet
} = React;

export class WrappedLinkField extends React.Component{
  render(){

    return <LinkField
      label={this.props.label}
      onPress={this.props.onPress}
      iconRight={<Icon name='ios-arrow-right'
      size={30}
        />
    }
}

export class WrappedPickerField extends React.Component{
    render(){

      return <PickerField
        fieldRef = {this.props.fieldRef}
        value={this.props.value}
        placeholder={this.props.placeholder}
        options={this.props.options}
        onChange={this.props.onChange}
        onValueChange={this.props.onValueChange}
        iconRight={
          <Icon name='ios-arrow-right'
          size={30}

          style={[
            formStyles.alignRight,{color: '#C7C7CC'},
            this.props.iconStyle]}/>
      }
      />
  }
}

let formStyles = StyleSheet.create({
    alignRight:{
      marginTop: 7, position:'absolute', right: 10
    }
  });
```
