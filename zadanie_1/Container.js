import React from 'react';
import { View, StyleSheet } from 'react-native';

export default Container = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.underline}></View>
            <View style={styles.content}>{children}</View>
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
    content: {
        alignSelf: 'center',
    },
});

