import React from "react"
import { View, FlatList, Image, Text, StyleSheet } from "react-native"
import { data } from "../data/dataitems"

export const SecondComponent = () => (
    <View style={{ flex: 1, paddingVertical: 10 }}>
        <FlatList
            style={styles.flatList}
            data={data}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={
                ({ item, index }) => {
                    return (
                        <View key={item.id}
                            style={[styles.secondComponent,
                            { marginRight: index === data.length - 1 ? 10 : 0 }]}>
                            <Image style={{ width: 50, height: 50 }} source={item.image} ></Image>
                            <Text>{item.title}</Text>
                        </View>
                    )
                }
            }
        />
    </View>
)

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: 'lightgrey',
    },
    secondComponent: {
        marginLeft: 10,
        marginVertical: 10,
        paddingVertical: 10,
        width: 100,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 5,
    }
});