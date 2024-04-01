import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import Container from '../components/Container';

const MainPage = () => {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <ScrollView>
                <Container>
                    <Text>123</Text>
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MainPage;
