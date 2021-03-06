import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default class GetRecipe extends React.Component {
    constructor(props) {
        super(props)
        this.state={ text: ''}
    }

    submitSearch = (ev) => {
        this.props.navigation.navigate('Show')
    }

    render() {
        return (
            <View
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
                <View>
                    <Text style={styles.titleText}>Recipe Reader V0.2</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={ text => this.setState({text})}
                        placeholder={'What would you like to make?'}
                        value={this.state.text}
                    />
                    <Button
                        onPress={this.submitSearch}
                        title={"Search"}
                        color={"#7caa2d"}
                        width={50}
                        accessibilityLabel="Search for a Recipe"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 36,
        textAlign: 'center',
        marginTop: 150,
        color: '#e6df44',
        backgroundColor: "#7caa2d",
        ...Platform.select({
            ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            },
            android: {
            elevation: 20,
            },
        }),
    },
    searchInput: {
        height: 40, 
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: '#e6df44',
    },
        contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            },
            android: {
            elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});