import React from 'react';
import {View, 
        Text, 
        Image, 
        StyleSheet, 
        SafeAreaView, 
        StatusBar,
        Pressable,
        Linking,
        } from 'react-native';

const imageProfileGitHub = 
'https://avatars.githubusercontent.com/u/100371466?v=4'

const colorGitHub = '#010409'
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const urlToMyGitHub = 'https://github.com/rhodrigosouza';
const App = () => {
    const handlePressGoToGitHub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGitHub);
        if(res) {
            console.log('Link aprovado');
            console.log('abrindo link...');
            await Linking.openURL(urlToMyGitHub);
        }
    };
    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGitHub} barStyle= "light-content"/>
        <View style={style.content}>
            <Image
            accessibilityLabel='Rhodrigo com fundo branco' 
            style={style.avatar} 
            source= {{uri: imageProfileGitHub}} 
            />
            <Text 
            accessibilityLabel='Rhodrigo Souza' 
            style={[style.defaultText, style.name]}>Rhodrigo Souza</Text>
            <Text 
            accessibilityLabel='@rhodrigosouza'
            style={[style.defaultText, style.nickname]}>@rhodrigosouza</Text>
            <Text
            accessibilityLabel='Mobile Developer - Software Engennier' 
            style={[style.defaultText, style.description]}>Mobile Developer | Software Enginneer </Text>
            <Pressable onPress={handlePressGoToGitHub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                </View>
            </Pressable>  
        </View>
    </SafeAreaView>      
    );
};

export default App; 

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGitHub,
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
       height: 200,
       width: 200, 
       borderRadius: 100,
       borderColor: 'white',
       borderWidth: 2,   
    },
    defaultText: {
       color: colorFontGitHub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGitHub,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
