import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { TabContext } from './navigation';

export default function Events({ navigation }: any) {
  const { routeName, setRouteName } = useContext(TabContext);

  useFocusEffect(
    React.useCallback(() => {
      setRouteName('events')
    }, []),
  );

  return (
    <View
      style={{
        paddingHorizontal: 20,
        flex: 1
      }}
    >
      <Text
        style={styles.title}
      >
        Upcoming events!
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 20, flex: 1}}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('EventsDetail', { initialIndex: 0 })}
        >
          <ImageBackground
            source={require('../../assets/png/event-one.jpeg')}
            resizeMode='cover'
            style={styles.image}
            imageStyle={{
              borderWidth: 1,
              borderColor: '#D9D9D9',
              borderRadius: 15,
              marginBottom: 20
            }}
          >
            <View
              style={styles.date}
            >
              <Text
                style={styles.dateText}
              >
                18
              </Text>
              <Text
                style={styles.dateMonth}
              >
                Nov
              </Text>
            </View>
            <View
              style={{marginBottom: 20}}
            >
              <Text
                style={styles.eventTitle}
              >
                Local Business {'\n'}Partnership Day
              </Text>
              <Text
                style={styles.eventText}
              >
                Partner with local businesses for a day of promotions and discounts.
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('EventsDetail', { initialIndex: 1 })}
        >
          <ImageBackground
            source={require('../../assets/png/event-two.jpeg')}
            resizeMode='cover'
            style={styles.image}
            imageStyle={{
              borderWidth: 1,
              borderColor: '#D9D9D9',
              borderRadius: 15,
              marginBottom: 20
            }}
          >
            <View
              style={styles.date}
            >
              <Text
                style={styles.dateText}
              >
                21
              </Text>
              <Text
                style={styles.dateMonth}
              >
                Dec
              </Text>
            </View>
            <View
              style={{marginBottom: 20}}
            >
              <Text
                style={styles.eventTitle}
              >
                An evening of tabletop games for relaxed competition
              </Text>
              <Text
                style={styles.eventText}
              >
                Host a contest for guests to share event photos on social media to win free games or discounts.
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  title: {
    marginTop: 70,
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 28.8,
    color: '#1E1E1E',
  },
  image: {
    flex: 1,
    padding: 20,
    height: undefined,
    aspectRatio: 0.85,
    justifyContent: 'space-between'
  },
  date: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
    width: 59,
    height: 63,
    backgroundColor: '#FBFBFB',
    borderRadius: 5,
  },
  dateText: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 24,
    color: '#1E1E1E',
  },
  dateMonth: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.2,
    color: '#1E1E1E',
  },
  eventTitle: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 28.8,
    color: '#FBFBFB',
  },
  eventText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.2,
    color: '#FBFBFB',
    marginTop: 10,
  },
})