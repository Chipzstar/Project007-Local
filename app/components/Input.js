import React, {Component} from 'react';
import { StyleSheet, TextInput} from 'react-native';

const Input = ({placeholder, value, onChangeText, secureTextEntry, onSubmitEditing}) => {
    return (
        <TextInput
            textContentType={'creditCardNumber'}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor={'white'}
            autoCorrect={false}
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        color: 'white',
        padding: 10,
        fontSize: 18,
        fontFamily: 'Optima-Regular',
        lineHeight: 30,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'rgba(44, 72, 83, 0.15)',
        opacity: 0.9,
        letterSpacing: 0.8,
        textAlign: 'center'
    },
});

export default Input;