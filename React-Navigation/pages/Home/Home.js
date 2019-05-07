import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Button,
    AsyncStorage
} from 'react-native';

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
                <Button title="Show me more of the app" onPress={this._showMoreApp} />
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        )
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };
    
      _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

const styles = StyleSheet.flatten({});