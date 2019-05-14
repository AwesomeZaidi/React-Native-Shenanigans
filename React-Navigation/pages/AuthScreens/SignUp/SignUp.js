
import React, { Component } from 'react';
import { connect } from "react-redux";
import { signUp } from "../../../redux/actions/index";
console.log('signUp:', signUp);

// ----------------------------------------------------------------------------------
// React Native Imports
// ----------------------------------------------------------------------------------
import { View, Text, Button, AsyncStorage, TextInput } from 'react-native';

// ----------------------------------------------------------------------------------
// Components / Styles Imports
// ----------------------------------------------------------------------------------
import styles from '../styles/forms.js';
import { placeholder } from '../../styles/variables';

// ----------------------------------------------------------------------------------
// SignUp Component Class
// ----------------------------------------------------------------------------------
class SignUp extends Component {    
    // ------------------------------------------
    // State
    // ------------------------------------------
    state = {
        email: '',
        username: '',
        password: ''
    };

    // ------------------------------------------
    // Navigation Options: title
    // ------------------------------------------
    static navigationOptions = {
        title: 'Signup',
    };

    // ------------------------------------------
    // Update state on text change
    // ------------------------------------------
    onChangeText = (text, feildName) => {
        this.setState({
            [feildName]: text
        });
    };
    // onChangeText(text, fieldName) {
    //     this.setState({
    //       [fieldName]: text,
    //     })
    // }
    
    // ------------------------------------------
    // signUp redux action handler function attached to props. 
    // ------------------------------------------ 
    handleSubmit = async () => {
        await this.props.signUp(this.state);
        this.props.navigation.navigate('App');
    };

    render() {
        console.log('in render');

        // { this.props.user ? this.props.navigation.navigate('Home') : null }
        return (
          <View style={styles.formStyle}>
            <TextInput
                onChangeText={(text) => this.onChangeText(text, 'email')}
                value={this.state.email}
                placeholder='Email Adress'
                placeholderTextColor={placeholder}
                style={styles.inputField}
                autoCapitalize='none'
                keyboardType='email-address'
            />
            <TextInput
                onChangeText={(text) => this.onChangeText(text, 'username')}
                value={this.state.username}
                style={styles.inputField}
                placeholder='Username'
                autoCapitalize='none'
                placeholderTextColor={placeholder}
            />
            <TextInput
                onChangeText={(text) => this.onChangeText(text, 'password')}
                value={this.state.password}
                style={styles.inputField}
                placeholder='Password'
                placeholderTextColor={placeholder}
            />
            <Button
                title="Signup"
                buttonStyle={styles.primary_btn}
                onPress={this.handleSubmit}
            />
          </View>
        );
    };
};

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

function mapDispatchToProps() {
    return {
        signUp
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(SignUp);
