import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Modal, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import BackArrowSvg from '../../assets/svg/back-arrow.svg';
import CardSvg from '../../assets/svg/back-card.svg';

const images = [
  require('../../assets/png/bowling-card.png'),
  require('../../assets/png/circle-card.png'),
  require('../../assets/png/present-card.png'),
  require('../../assets/png/tennis-card.png'),
];

const generateShuffledGrid = () => {
  const grid = [...images, ...images];
  for (let i = grid.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [grid[i], grid[j]] = [grid[j], grid[i]];
  }
  return grid.map(image => ({ image, isRevealed: false, isMatched: false }));
};

export default function HomeGame({ navigation }: any) {
  const [grid, setGrid] = useState(generateShuffledGrid());
  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);
  const [lockBoard, setLockBoard] = useState(false);
  const [isWon, setIsWon] = useState(false);

  const resetSelections = () => {
    setFirstSelection(null);
    setSecondSelection(null);
  };

  const handleTilePress = (index: any) => {
    if (lockBoard || grid[index].isRevealed || grid[index].isMatched) return;
    const newGrid = [...grid];
    newGrid[index].isRevealed = true;
    setGrid(newGrid);
    if (firstSelection === null) {
      setFirstSelection(index);
    } else {
      setSecondSelection(index);
    }
  };

  const checkIfWon = () => {
    if (grid.every(tile => tile.isMatched)) {
      setIsWon(true)
      setTimeout(() => {
        setIsWon(false)
        resetGame();
      }, 3000);
    }
  };

  const resetGame = () => {
    setGrid(generateShuffledGrid());
    resetSelections();
    setLockBoard(false);
  };

  useEffect(() => {
    checkIfWon();
  }, [grid]);

  useEffect(() => {
    if (firstSelection !== null && secondSelection !== null) {
      if (grid[firstSelection].image === grid[secondSelection].image) {
        const newGrid = [...grid];
        newGrid[firstSelection].isMatched = true;
        newGrid[secondSelection].isMatched = true;
        setGrid(newGrid);
        resetSelections();
      } else {
        setLockBoard(true);
        setTimeout(() => {
          const newGrid = [...grid];
          newGrid[firstSelection].isRevealed = false;
          newGrid[secondSelection].isRevealed = false;
          setGrid(newGrid);
          resetSelections();
          setLockBoard(false);
        }, 1000);
      }
    }
  }, [secondSelection]);

  useFocusEffect(
    React.useCallback(() => {
      resetGame();
      setIsWon(false)
    }, []),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
            resetGame();
          }} 
        >
          <BackArrowSvg />
        </Pressable>
        <Text style={styles.mainText}>Matching Pairs</Text>
        <View style={{width: 33}} />
      </View>
      <ScrollView 
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      >
        {grid.map((tile, index) => (
          <Pressable key={index} onPress={() => handleTilePress(index)}>
            {tile.isRevealed || tile.isMatched ? (
              <Image source={tile.image} style={styles.image} />
            ) : (
              <CardSvg width={160} />
            )}
          </Pressable>
        ))}
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isWon}
        onRequestClose={() => setIsWon(false)}
      >
        <View style={styles.modalOverlay}>
          <Image source={require('../../assets/png/good-job.png')} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 70,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  mainText: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 28.8,
    color: '#1E1E1E',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  image: {
    width: 160,
    resizeMode: 'contain',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

