//show list of employees
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillUnmount(){
        this.props.employeesFetch();
    }
    render(){
        return(
            <View>
                <Text> Employee </Text>
                <Text> Employee </Text>
                <Text> Employee </Text>
                <Text> Employee </Text>
                <Text> Employee </Text>
            </View>
        );
    }
}

export default connect(null, { employeesFetch })(EmployeeList);