import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import BackArrow from '../../assets/svg/back-arrow.svg'
import LinearGradient from 'react-native-linear-gradient';

export default function HomeActivitiesDetail({ navigation }: any) {
  const route = useRoute();
  const initialIndex = route.params?.initialIndex || 0;

  const data = [
    {
      id: 1,
      title: 'Icon Balcony bar',
      description: "It’s a chic location offering panoramic views and a relaxed, elegant atmosphere. The bar is situated on an open balcony, providing stunning views of the city, especially at night when the lights are twinkling. \n \n Inside, you’ll find cozy lounge areas perfect for enjoying signature cocktails or classic drinks. It’s the ideal spot for evening meetups with friends or a peaceful retreat after a long day. The bar combines a modern interior with an open-air vibe, creating a unique experience for all guests.",
      image: require('../../assets/png/activiti-one.jpeg'),
    },
    {
      id: 2,
      title: 'Food&Drink',
      description: 'At our Food & Drink section, we believe that great food enhances any experience. Indulge in a diverse menu crafted to satisfy every palate, featuring delectable appetizers, savory main courses, and delightful desserts. Our chefs use only the freshest ingredients, ensuring that every dish bursts with flavor. \n \n Complement your meal with our extensive drink selection, including signature cocktails, craft beers, and fine wines. Whether you’re dining with friends or enjoying a cozy meal, our Food & Drink offerings promise to elevate your experience.',
      image: require('../../assets/png/activiti-two.png'),
    },
    {
      id: 3,
      title: 'Kings Sport Bar',
      description: 'Kings Sport Bar is the ultimate destination for sports enthusiasts! Immerse yourself in the thrilling atmosphere as you watch live games on our massive screens. Enjoy a variety of delicious food options, from crispy chicken wings to mouthwatering burgers, all while sipping on refreshing beverages. \n \n Our bar is designed to ensure that you and your friends have the best viewing experience possible, making it the perfect spot to cheer on your favorite teams and celebrate every victory together.',
      image: require('../../assets/png/activiti-three.png'),
    },
    {
      id: 4,
      title: 'Karaoke',
      description: 'Get ready to take the stage at our Karaoke nights, where you can unleash your inner rock star! With a vast selection of songs from every genre, everyone can find their perfect tune. Whether you’re belting out classics or trying your hand at the latest hits, our karaoke experience is all about fun and connection. \n \n Gather your friends for a night of laughter, applause, and unforgettable performances. Our friendly atmosphere and state-of-the-art sound system will make your karaoke night one to remember!',
      image: require('../../assets/png/activiti-four.jpeg'),
    },
  ];

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.titleContainer}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <BackArrow />
        </TouchableOpacity>
        <Text
          style={styles.title}
        >
          {data[initialIndex].title}
        </Text>
        <View style={{width: 33}} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{alignItems: 'center'}}
        >
          <Image source={data[initialIndex].image} style={styles.image} />
        </View>
        <Text
          style={styles.title}
        >
          Descripton:
        </Text>
        <Text
          style={styles.text}
        >
          {data[initialIndex].description}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Reservation')}
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
              Reserve this location
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    color: '#1E1E1E',
  },
  image: {
    width: '100%',
    marginTop: 30,
    borderRadius: 15,
    marginBottom: 30,
    height: undefined,
    aspectRatio: 1.5,
  },
  text: {
    marginTop: 20,
    weight: 400,
    fontSize: 16,
    lineHeight: 22.4,
    color: '#1E1E1E',
  },
  button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#FBFBFB',
  },
})