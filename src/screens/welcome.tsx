import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Welcome({ navigation }: any) {
  return (
    <ImageBackground
      source={require('../../assets/newDiz/bg.jpg')}
      resizeMode='cover'
      style={{
        flex: 1,
      }}
    >
      <View
        style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}
      >
        <Text
          style={{color: '#fbee8a',fontWeight:'bold', fontSize:40, textAlign:'center', marginBottom:40}}
        >
          Welcome to
        </Text>
        <Text
          style={{color: '#fbee8a',fontWeight:'bold', fontSize:50, textAlign:'center', marginBottom:40}}
        >
          Events EMPIRE Quest
        </Text>
        <Text
          style={{color: '#fbee8a',fontSize:20, textAlign:'center'}}
        >
          One of the most iconic squares in London.Live entertainment every weekend - music,  specials, entertainments, and more.
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 30
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Tabs')}
        >
          <LinearGradient
            colors={['#0F9A86','#1EFBFB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text
              style={styles.buttonText}
            >
              Continue
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
};
{/**<ImageBackground
      source={require('../../assets/newDiz/bg.jpg')}
      resizeMode='cover'
      style={{
        flex: 1,
      }}
    >
      <View
        style={styles.textContainer}
      >
        <Text
          style={styles.title}
        >
          Welcome to EMPIR
        </Text>
        <Text
          style={styles.text}
        >
          One of the most iconic squares in London.Live entertainment every weekend - music,  specials, entertainments, and more.
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 30
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Tabs')}
        >
          <LinearGradient
            colors={['#0F9A86','#1EFBFB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text
              style={styles.buttonText}
            >
              Continue
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ImageBackground> */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 45,
  },
  textContainer: {
    alignItems: 'center',
    paddingTop: 200,
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fbee8a',
    lineHeight: 38.4,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    color: '#fbee8a',
    textAlign: 'center',
    lineHeight: 21.6,
  },
  button: {
    width: '100%',
    height: 50,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#FBFBFB',
  }
})