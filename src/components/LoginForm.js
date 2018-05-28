import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions'; //import action creator
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email} //process of getting email
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry //for password input
                        label="Password"
                        placeholder="password"
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email
    };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
