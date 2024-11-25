import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import BackArrow from '../../assets/svg/back-arrow.svg'

const { width } = Dimensions.get('window');
const CARD_WIDTH = 258;
const CARD_MARGIN = 5;

export default function HomeNewsDetail({ navigation }: any) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const data = [
    {
      id: 1,
      description: 'Celebrate your payday with us! Enjoy special discounts, deals, and exciting activities all weekend long. Treat yourself to a fun-filled experience you deserve!',
      image: require('../../assets/png/news-one.png'),
    },
    {
      id: 2,
      description: 'Gather with friends and feel the thrill of the big game with your favorite drinks and snacks. Take advantage of our fan-exclusive deals to make your match day memorable — delicious food and unbeatable prices!',
      image: require('../../assets/png/news-two.png'),
    },
    {
      id: 3,
      description: 'Immerse yourself in Asian flavors with a chef-curated menu. Choose your favorite dishes for a perfectly balanced two-course meal, crafted with the freshest ingredients and care.',
      image: require('../../assets/png/news-three.png'),
    },
  ];

  const currentIndex = Animated.divide(scrollX, CARD_WIDTH + CARD_MARGIN * 2);

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
          News updates
        </Text>
        <View style={{width: 33}} />
      </View>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + CARD_MARGIN * 2}
        decelerationRate="fast"
        contentContainerStyle={styles.scrollContainer}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * (CARD_WIDTH + CARD_MARGIN * 2),
            index * (CARD_WIDTH + CARD_MARGIN * 2),
            (index + 1) * (CARD_WIDTH + CARD_MARGIN * 2),
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={item.id}
              style={[
                styles.card,
                {
                  transform: [{ scale }],
                  opacity,
                },
              ]}
            >
              <Image source={item.image} style={styles.image} />
            </Animated.View>
          );
        })}
      </Animated.ScrollView>
      <View style={styles.descriptionContainer}>
        {data.map((item, index) => {
          const opacity = currentIndex.interpolate({
            inputRange: [index - 0.5, index, index + 0.5],
            outputRange: [0, 1, 0],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={item.id}
              style={[styles.descriptionTextContainer, { opacity }]}
            >
              <Text style={styles.descriptionTitle}>Description</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </Animated.View>
          );
        })}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    lineHeight: 28.8,
    fontWeight: 600,
  },
  scrollContainer: {
    paddingHorizontal: (width - CARD_WIDTH) / 2,
  },
  card: {
    width: CARD_WIDTH,
    height: 289,
    marginHorizontal: CARD_MARGIN,
    borderRadius: 15,
  },
  image: {
    width: CARD_WIDTH,
    height: 289,
    borderRadius: 15,
  },
  descriptionContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  descriptionTextContainer: {
    position: 'absolute',
    top: -CARD_WIDTH + 50,
  },
  descriptionTitle: {
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 500,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 22.4,
    color: '#1E1E1E',
    textAlign: 'center',
  },
})