import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Container = () => {
    const [text, setText] = useState('');
    const [savedText, setSavedText] = useState('');

    const handleTextChange = newText => {
        setSavedText(newText);
    };

    const handleInputSubmit = () => {
        setText(savedText);
        setSavedText('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.underline}></View>
            <Text style={styles.text}>Witaj {text}</Text>
            <TextInput
                value={savedText}
                onChangeText={handleTextChange}
                onSubmitEditing={handleInputSubmit}
                placeholder="Wpisz imię"
                style={[styles.input, { minWidth: 20, width: 'auto' }]} // ustawia mimalną szerokość, ale jeśli jest za dużo tekstu to poszerza się
            />
            <View style={styles.underline}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
    underline: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 16,
        underline: 'false'
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginVertical: 20,
        alignSelf: 'center',
        borderRadius: 10,
    },
});

export default Container;
