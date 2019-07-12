import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import { Provider } from 'react-redux'; 
import { createStore } from 'redux'; 
import firebase from 'firebase';
import reducers from './reducers'; 
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyA79mVrz4e12EffoZ_QnVo0XdzmtmzEn5k",
      authDomain: "manager-edf19.firebaseapp.com",
      databaseURL: "https://manager-edf19.firebaseio.com",
      projectId: "manager-edf19",
      storageBucket: "manager-edf19.appspot.com/",
      messagingSenderId: "325145871447",
      appId: "1:325145871447:web:86531356d0a54a5e"
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
