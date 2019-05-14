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

    logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                {/*add some style here later! :) */}
                <Text>Welcome your Dashboard</Text>
                <Button onPress={this.logOut} title='Log Out'></Button>
                
                <Button title="Show me more of the app" onPress={this._showMoreApp} />
            </View>
        )
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Detail');
    };
}

const styles = StyleSheet.flatten({});