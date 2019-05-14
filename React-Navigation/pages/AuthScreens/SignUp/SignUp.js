
// ----------------------------------------------------------------------------------
// Imports
// ----------------------------------------------------------------------------------
import { View, Text, Button, ScrollView, TextInput } from 'react-native';

import React, { Component } from 'react';
import { connect } from "react-redux";
import { signUp } from "../../../redux/actions/index";

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
        password: '',
        inputPressed: false
    };

    // ------------------------------------------
    // Navigation Options: title
    // ------------------------------------------
    static navigationOptions = {
        title: 'Sign Up',
    };

    // ------------------------------------------
    // Update state on text change
    // ------------------------------------------
    onChangeText = (text, feildName) => {
        this.setState({
            [feildName]: text
        });
    };
    
    onFocus = () => {
        this.setState({
            inputPressed: true
        })
    }

    onBlur = (feildName) => {
        !this.state[feildName] ?
            this.setState({
                inputPressed: false
            })
        :
        null
    }

    // ------------------------------------------
    // signUp redux action handler function attached to props. 
    // ------------------------------------------ 
    handleSubmit = async () => {
        await this.props.signUp(this.state);
        this.props.navigation.navigate('App');
    };

    // ------------------------------------------
    // signIn component function that navigates user to SignIn screen. 
    // ------------------------------------------  
    signIn = () => {
        this.props.navigation.navigate('SignIn');
    };

    render() {

        { this.props.user ? this.props.navigation.navigate('Home') : null }
        
        return (
          <ScrollView
            style={styles.form}
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={styles.wrapper}
          >
            <Text style={styles.h1_primary}>Logo Here</Text>
            <TextInput
                onChangeText={(text) => this.onChangeText(text, 'email')}
                value={this.state.email}
                style={this.state.inputPressed ? styles.inputFieldFocus : styles.inputFieldBlur}
                onFocus={ () => this.onFocus() }
                onBlur={ () => this.onBlur('email') }
                placeholder='Email Adress'
                placeholderTextColor={placeholder}
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
            <View style={styles.otherAuthOption}>
                <Text>Already have an account? </Text>
                <Text 
                    onPress={this.signIn}
                    style={[styles.otherAuthOptionBtn, styles.anotherStyle]}
                >
                    Log in
                </Text>
            </View>
          </ScrollView>
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
