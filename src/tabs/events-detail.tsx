import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import BackArrow from '../../assets/svg/back-arrow.svg'

export default function EventsDetail({ navigation }: any) {
  const route = useRoute();
  const initialIndex = route.params?.initialIndex || 0;

  const data = [
    {
      id: 1,
      title: 'Local Business \n Partnership Day',
      descriptionTitle: ['Vendor Booths:', 'Discounts:', 'Collaborative Activities:', 'Cross-Promotion:', 'Food Specials:', 'Community Focus:'],
      description: ['Local businesses showcase products and offer exclusive deals.', 'Special discounts on activities and from partnered businesses.', 'Business-sponsored challenges like themed bowling or darts.', 'Promote the event on social media with partner businesses.', 'Unique food and drink offers from local vendors.', 'Support local businesses while enjoying fun activities.'],
      image: require('../../assets/png/event-one.jpeg'),
    },
    {
      id: 2,
      title: 'An evening of tabletop games for relaxed competition',
      descriptionTitle: ['Game Variety:', 'Relaxed Atmosphere:', 'Snacks & Drinks:', 'Meet New Friends:'],
      description: ['Choose from classic favorites and modern hits, including strategy games, card games, and more. There’s something for every taste!', 'Enjoy a casual setting where the focus is on having a good time rather than intense competition. Feel free to cheer, tease, and laugh with fellow players.', 'Munch on light snacks and sip on refreshing beverages as you strategize and engage in friendly rivalry.', 'Connect with fellow gaming enthusiasts, share tips, and forge new friendships over shared victories and defeats.'],
      image: require('../../assets/png/event-two.jpeg'),
    },
  ];

  return (
    <View
      style={styles.container}
    >
      <ImageBackground
        source={data[initialIndex].image}
        resizeMode='cover'
        style={styles.image}
      >
        <Text
          style={styles.title}
        >
          {data[initialIndex].title}
        </Text>
      </ImageBackground>
      <View
        style={{
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          flex: 1,
          position: 'relative',
          top: -20,
          marginBottom: -20,
          backgroundColor: '#FFF',
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            padding: 20,
          }}
        >
          <View>
            <Text
              style={styles.description}
            >
              Descripton:
            </Text>
            {data[initialIndex].descriptionTitle.map((text: string, index) => {
              return (
                <View key={index}>
                  <Text
                    style={[styles.text, {marginLeft: 10}]}
                  >
                    • {text}
                  </Text>
                  <Text
                    style={[styles.text, {color: '#1E1E1EBF', marginLeft: 22}]}
                  >
                    {data[initialIndex].description[index]}
                  </Text>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 28.8,
    color: '#FBFBFB',
  },
  description: {
    weight: 500,
    fontSize: 20,
    lineHeight: 24,
    color: '#1E1E1E',
    marginBottom: 20
  },
  image: {
    width: '100%',
    borderRadius: 15,
    height: undefined,
    aspectRatio: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    weight: 400,
    fontSize: 16,
    lineHeight: 22.4,
    color: '#1E1E1E',
  },
})