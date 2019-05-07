import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    AsyncStorage
    // TextInput,
    // StyleSheet
} from 'react-native';

class SignIn extends Component {
    
    static navigationOptions = {
        title: 'Please sign in',
    };
    
    render() {
        return (
          <View>
            <Button title="Sign in!" onPress={this._signInAsync} />
          </View>
        );
    };

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
};

export default SignIn;