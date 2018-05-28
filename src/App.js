import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyD__6KFBA7DFhAGtcHRKzKkdSu_3YKiv10',
            authDomain: 'manager-2f8ca.firebaseapp.com',
            databaseURL: 'https://manager-2f8ca.firebaseio.com',
            projectId: 'manager-2f8ca',
            storageBucket: 'manager-2f8ca.appspot.com',
            messagingSenderId: '101499291549'
          };
          firebase.initializeApp(config);
    }
    render(){
        return (
            //you need to provide at least one default reducer
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}
export default App;