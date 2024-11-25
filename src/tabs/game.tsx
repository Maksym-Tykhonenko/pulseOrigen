import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { TabContext } from './navigation';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 60) / numColumns;

const data = [
  { id: 0, title: 'Billiards', image: require('../../assets/png/billiards.png') },
  { id: 1, title: 'Darts', image: require('../../assets/png/background.jpeg') },
  { id: 2, title: 'Bowling', image: require('../../assets/png/bowling.png') },
  { id: 3, title: 'Table tennis', image: require('../../assets/png/table-tennis.png') },
  { id: 4, title: 'Air hockey', image: require('../../assets/png/air-hockey.png') },
  { id: 5, title: 'Foosball', image: require('../../assets/png/foosball.png') },
];

export default function Game({ navigation }: any) {
  const { routeName, setRouteName } = useContext(TabContext);

  useFocusEffect(
    React.useCallback(() => {
      setRouteName('game')
    }, []),
  );

  const renderItem = ({ item }: any) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('GameDetail', { initialIndex: item.id })}
      style={styles.card}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        paddingHorizontal: 10,
        flex: 1,
      }}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 0.9,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 5,
  },
  container: {
    paddingTop: 70,
    paddingBottom: 40,
  }
})