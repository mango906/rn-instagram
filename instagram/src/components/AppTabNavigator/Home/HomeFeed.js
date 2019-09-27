import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'native-base';

const HomeFeed = () => {
    return (
        <View style={style.container}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10
                }}
            >
                <View style={style.profile}>
                    <Icon name="ios-person" style={{ color: '#fff' }} />
                </View>
                <Text style={{ paddingLeft: 10 }}>_minkb01</Text>
            </View>
            <Image
                style={style.fullWidth}
                source={{
                    uri:
                        'https://i.pinimg.com/originals/d9/82/f4/d982f4ec7d06f6910539472634e1f9b1.png'
                }}
            ></Image>
            <View style={{ flexDirection: 'row' }}>
                <Icon name="heart" style={style.paddingTen}></Icon>
                <Icon name="chatbubbles" style={style.paddingTen}></Icon>
            </View>
            <View style={{ padding: 10, flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold' }}>_minkb01</Text>
                <Text style={{ paddingLeft: 10 }}>글글글</Text>
            </View>
        </View>
    );
};

const window = Dimensions.get('window');

const style = StyleSheet.create({
    container: {
        display: 'flex'
        // flexDirection: 'row',
        // alignItems: 'center',
    },

    fullWidth: {
        width: window.width,
        height: window.width
    },

    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    profile: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#E6E6E6',
        width: 40,
        height: 40
    },

    paddingTen: {
        paddingLeft: 15,
        paddingTop: 10
    },

    borderBlack: {}
});

export default HomeFeed;
