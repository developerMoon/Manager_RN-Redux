//show list of employees
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillUnmount(){
        this.props.employeesFetch(); //action creator

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        //nextProps are the next set of props that this component will be rendered with
        //this.props is still the old set of props

        this.createDataSource(nextProps);
    }
    createDataSource({ employees }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee){
        return <ListItem employee={employee} />;
    }

    render(){
        return(
            <ListView
                enableEmptySections
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}
const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid)=> { //put them in array
        return { ...val, uid }; //userid : id that differentiate from others, unique id
        //{ shift: 'Monday', name: 'S', id:'1k2kj3jl'};
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);