import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
