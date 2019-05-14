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
                {/*add some style here later! :) */}
                <Text>This is the Home Page</Text>
                <Button onPress={() => navigate('SignIn')} title='Sign in'></Button>
                <Button onPress={() => navigate('SignUp')} title='Sign up'></Button>
                
                <Button title="Show me more of the app" onPress={this._showMoreApp} />
            </View>
        )
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };
}

const styles = StyleSheet.flatten({});