import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default class Home extends Component {

    static navigationOptions = {
		title: 'Home Page'
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>This is the Home Page</Text>
                <Button onPress={() => navigate('SignIn')} title='Sign in'></Button>
                <Button onPress={() => navigate('SignUp')} title='Sign up'></Button>
            </View>
        )
    }
}

const styles = StyleSheet.flatten({});