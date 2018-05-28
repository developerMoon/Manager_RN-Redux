import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            //you need to provide at least one default reducer
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}
export default App;