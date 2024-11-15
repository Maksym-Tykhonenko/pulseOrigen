import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import BackArrow from '../../assets/svg/back-arrow.svg'
import LinearGradient from 'react-native-linear-gradient';

export default function GameDetail({ navigation }: any) {
  const route = useRoute();
  const initialIndex = route.params?.initialIndex || 0;

  const data = [
    { 
      id: 0,
      title: 'Billiards',
      subTitle: 'The Art of Cue Sports',
      description: 'Billiards is a cue sport where players strike balls with a cue stick on a cloth-covered table. It includes various formats like pool, snooker, and carom, each with unique rules and styles.',
      highlightsTitle: ['Gameplay:', 'Skill:', 'Social & Competitive:', 'Accessibility:'],
      highlightstext: ['Players use a cue to strike balls, aiming to pot them or score points.', ' Requires precision, control, and strategic thinking.', 'Enjoyed casually and in professional tournaments globally.', 'Fun for all ages, combining skill and entertainment.'],
      image: require('../../assets/png/billiards.png') 
    },
    { 
      id: 1,
      title: 'Darts',
      subTitle: 'The Game of Precision and Strategy',
      description: 'Darts is a precision sport where players throw small, pointed missiles (darts) at a circular target (dartboard) fixed to a wall.',
      highlightsTitle: ['Gameplay:', 'Skill:', 'Social & Competitive:', 'Accessibility:'],
      highlightstext: ['Players aim to score points by hitting specific areas on the dartboard, often competing in various game formats like 501, Cricket, and Around the World.', 'Success requires hand-eye coordination, accuracy, and strategy in selecting scoring areas.', 'Enjoyed casually in pubs and homes, as well as in professional leagues and tournaments worldwide.', 'Suitable for all ages, darts combines fun and competition, making it a popular pastime.'],
      image: require('../../assets/png/background.jpeg')
    },
    { 
      id: 2,
      title: 'Bowling',
      subTitle: 'A Strikingly Fun Sport',
      description: 'Bowling is a popular sport where players roll a heavy ball down a long, narrow lane to knock down a set of pins.',
      highlightsTitle: ['Gameplay:', 'Skill:', 'Social & Competitive:', 'Accessibility:'],
      highlightstext: ['Players take turns rolling the ball, aiming to knock down all ten pins arranged in a triangular formation, with points awarded for strikes and spares.', 'Success relies on technique, timing, and accuracy.', 'Enjoyed recreationally with friends or in leagues and tournaments.', 'Suitable for all ages, bowling combines fun, social interaction, and competition.'],
      image: require('../../assets/png/bowling.png')
    },
    { 
      id: 3,
      title: 'Table tennis',
      subTitle: 'The Fast-Paced Battle of Wits',
      description: 'Table tennis, also known as ping pong, is a fast-paced sport played on a table divided by a net.',
      highlightsTitle: ['Gameplay:', 'Skill:', 'Social & Competitive:', 'Accessibility:'],
      highlightstext: ['Players hit a lightweight ball back and forth using small paddles, aiming to score points by making the ball bounce on the opponent’s side.', 'Requires quick reflexes, hand-eye coordination, and strategic placement.', 'Played recreationally and in organized competitions, from local clubs to international tournaments.', 'Suitable for all ages, table tennis offers a fun and engaging way to improve fitness and coordination.'],
      image: require('../../assets/png/table-tennis.png')
    },
    { 
      id: 4,
      title: 'Air hockey',
      subTitle: 'The Thrill of the Puck',
      description: 'Air hockey is an exciting arcade game where players use paddles to hit a lightweight puck into the opponent`s goal.',
      highlightsTitle: ['Gameplay:', 'Skill:', 'Social & Competitive:', 'Accessibility:'],
      highlightstext: ['Players compete on a specially designed table with a smooth surface and air jets, aiming to score points by getting the puck past the opponent.', 'Success requires quick reflexes, strategic thinking, and precise paddle control.', 'Commonly found in arcades and recreational centers, with both casual play and organized tournaments.', 'Suitable for all ages, air hockey combines speed and fun, making it a popular choice for friendly competition.'],
      image: require('../../assets/png/air-hockey.png')
    },
    { 
      id: 5,
      title: 'Foosball',
      subTitle: 'The Game That Brings People Together!',
      description: 'Foosball, also known as table soccer, is a tabletop game that simulates soccer, where players control miniature figures attached to rods.',
      highlightsTitle: ['Gameplay:', 'Skill:', 'Social & Competitive:', 'Accessibility:'],
      highlightstext: ['Players maneuver the rods to kick a small ball into the opponent`s goal, aiming to score points.', 'Success relies on hand-eye coordination, quick reflexes, and strategic positioning.', 'Commonly played in bars, game rooms, and competitions, fostering friendly rivalry.', 'Suitable for all ages, foosball combines fun and competition in a fast-paced setting.'],
      image: require('../../assets/png/foosball.png')
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
          style={styles.subTitle}
        >
          {data[initialIndex].subTitle}
        </Text>
        <Text
          style={[styles.text, {marginBottom: 20}]}
        >
          {data[initialIndex].description}
        </Text>
        <Text
          style={styles.text}
        >
          Highlights:
        </Text>
        {data[initialIndex].highlightsTitle.map((text: string, index) => {
          return (
            <View 
              key={index}
              style={{flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}
            >
              <Text
                style={styles.text}
              >
                •
              </Text>
              <View style={{ flex: 1, width: '100%'}}>
                <Text
                  style={[styles.text, {marginLeft: 10, fontWeight: 500}]}
                >
                  {text + ' '}
                  <Text
                    style={styles.text}
                  >
                    {data[initialIndex].highlightstext[index]}
                  </Text>
                </Text>
              </View>
              </View>
            )
        })}
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
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 28.8,
    color: '#1E1E1E',
  },
  image: {
    width: '100%',
    marginTop: 30,
    borderRadius: 15,
    height: undefined,
    aspectRatio: 1.5,
  },
  subTitle: {
    marginVertical: 20,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    color: '#1E1E1E',
  },
  text: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 22.4,
    color: '#1E1E1E',
  }
})