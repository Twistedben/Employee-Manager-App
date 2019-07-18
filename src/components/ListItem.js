import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

 
class ListItem extends Component {
  onRowPress() {
    // BElow we want to pass in the existing employee to the EmployeeCreate so it knows it's an existing employee that was clicked and selected
    Actions.employeeCreate({ employee: this.props.employee });
  }
  render() {
   const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={style.titleStyles}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  };
};
 
const style = {
  titleStyles: {
    fontSize: 18,
    paddingLeft: 15,
  }
};
 
export default ListItem;
