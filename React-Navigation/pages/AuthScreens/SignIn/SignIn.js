import React, { Component } from 'react';
import {
    View,
    Text
    // Button,
    // TextInput,
    // StyleSheet
} from 'react-native';

class SignIn extends Component {
    
    static navigationOptions = {
		title: 'Sign in'
    };

    render() {
        return (
            <View>
                <Text>Signin</Text>
            </View>
        )
    };
};

export default SignIn;