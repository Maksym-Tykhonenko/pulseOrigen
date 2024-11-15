import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';
import { TabContext } from './navigation';
import RightArrow from '../../assets/svg/right-arrow.svg'

export default function Home({ navigation }: any) {
  const { routeName, setRouteName } = useContext(TabContext);

  useFocusEffect(
    React.useCallback(() => {
      setRouteName('home')
    }, []),
  );

  return (
    <ScrollView
      style={{
        paddingHorizontal: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={styles.gameSection}
      >
        <ImageBackground
          source={require('../../assets/png/home-game-bg.jpeg')}
          resizeMode='cover'
          style={{
            flex: 1,
            padding: 20,
            justifyContent: 'space-between'
          }}
          imageStyle={{
            borderWidth: 1,
            borderColor: '#D9D9D9',
            borderRadius: 20,
          }}
          blurRadius={5} 
        >
          <Text
            style={styles.gameSection__title}
          >
            Try our New Game
          </Text>
          <Text
            style={styles.gameSection__text}
          >
            Match colorful cards and find all the pairs
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('HomeGame')}
          >
            <LinearGradient
              colors={['#0F9A86','#1EFBFB']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gameSection__button}
            >
              <Text
                style={styles.gameSection__buttonText}
              >
                Play now
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View
        style={styles.newsSection}
      >
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            marginRight: 20,
          }}
        >
          <Text
            style={[styles.section__title, {marginLeft: 20}]}
          >
            News updates
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeNewsDetail')}
          >
            <Text
              style={styles.newsSection__text}
            >
              Show all
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <Image
            source={require('../../assets/png/news-one.png')}
            style={[styles.newsSection__img, {marginLeft: 20}]}
            resizeMode={'cover'}
          />
          <Image
            source={require('../../assets/png/news-two.png')}
            style={styles.newsSection__img}
            resizeMode={'cover'}
            />
          <Image
            source={require('../../assets/png/news-three.png')}
            style={[styles.newsSection__img, {marginRight: 40}]}
            resizeMode={'cover'}
          />
        </ScrollView>
      </View>
      <View
        style={styles.activitiesSection}
      >
        <Text
          style={[styles.section__title, {marginBottom: 20}]}
        >
          Recent Activities
        </Text>
        <TouchableOpacity
          style={styles.activitiesSection__item}
          onPress={() => navigation.navigate('HomeActivitiesDetail', { initialIndex: 0 })}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../assets/png/activiti-one.jpeg')}
              style={[styles.activitiesSection__img]}
              resizeMode={'cover'}
            />
            <View>
              <Text
                style={styles.activitiesSection__mainText}
              >
                Icon Balcony bar
              </Text>
              <Text
                style={styles.activitiesSection__text}
              >
                View, style, relax.
              </Text>
            </View>
          </View>
          <RightArrow />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.activitiesSection__item}
          onPress={() => navigation.navigate('HomeActivitiesDetail', { initialIndex: 1 })}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../assets/png/activiti-two.png')}
              style={[styles.activitiesSection__img]}
              resizeMode={'cover'}
            />
            <View>
              <Text
                style={styles.activitiesSection__mainText}
              >
                Food&Drink
              </Text>
              <Text
                style={styles.activitiesSection__text}

              >
                Tasty, fresh, refined.
              </Text>
            </View>
          </View>
          <RightArrow />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.activitiesSection__item}
          onPress={() => navigation.navigate('HomeActivitiesDetail', { initialIndex: 2 })}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../assets/png/activiti-three.png')}
              style={[styles.activitiesSection__img]}
              resizeMode={'cover'}
            />
            <View>
              <Text
                style={styles.activitiesSection__mainText}
              >
                Kings Sport Bar
              </Text>
              <Text
                style={styles.activitiesSection__text}
              >
                Game, thrill, victory.
              </Text>
            </View>
          </View>
          <RightArrow />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.activitiesSection__item}
          onPress={() => navigation.navigate('HomeActivitiesDetail', { initialIndex: 3 })}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../assets/png/activiti-four.jpeg')}
              style={[styles.activitiesSection__img]}
              resizeMode={'cover'}
            />
            <View>
              <Text
                style={styles.activitiesSection__mainText}
              >
                Karaoke
              </Text>
              <Text
                style={styles.activitiesSection__text}
              >
                Fun, sing, mic.
              </Text>
            </View>
          </View>
          <RightArrow />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  gameSection__button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  gameSection__buttonText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#FBFBFB',
  },
  gameSection: {
    height: 170,
    marginTop: 70,
  },
  gameSection__title: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 28.8,
    color: '#FBFBFB',
    fontWeight: 600,
  },
  gameSection__text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19.2,
    color: '#FBFBFB',
    fontWeight: 400,
  },
  newsSection:{
    backgroundColor: '#F4F4F4',
    height: 277,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    borderRadius: 20,
    paddingVertical: 20,
    marginRight: -40,
  },
  section__title: {
    fontSize: 24,
    lineHeight: 28.8,
    fontWeight: 600,
  },
  newsSection__text: {
    fontSize: 14,
    lineHeight: 16.8,
    fontWeight: 400,
    marginRight: 20,
    color: '#1E1E1EBF'
  },
  newsSection__img:{
    width: 156,
    height: 184,
    borderRadius: 10,
    marginRight: 20,
  },
  activitiesSection__item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  activitiesSection__img: {
    width: 64,
    height: 64,
    borderRadius: 5,
  },
  activitiesSection__mainText: {
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 10,
    fontWeight: 500,
  },
  activitiesSection__text: {
    fontSize: 14,
    lineHeight: 16.8,
    marginLeft: 10,
    fontWeight: 400,
  }
})