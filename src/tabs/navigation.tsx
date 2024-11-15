import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { createContext, useState } from 'react';
import ActiveHome from '../../assets/svg/active-home.svg'
import NonActiveHome from '../../assets/svg/nonactive-home.svg'
import ActiveEvents from '../../assets/svg/active-events.svg'
import NonActiveEvents from '../../assets/svg/nonactive-events.svg'
import ActiveGame from '../../assets/svg/active-game.svg'
import NonActiveGame from '../../assets/svg/nonactive-game.svg'
import ActiveReservation from '../../assets/svg/active-reservation.svg'
import NonActiveReservation from '../../assets/svg/nonactive-reservation.svg'
import ActiveAccount from '../../assets/svg/active-account.svg'
import NonActiveAccount from '../../assets/svg/nonactive-account.svg'
import Home from './home';
import HomeNewsDetail from './home-news-detail';
import HomeActivitiesDetail from './home-activities-detail';
import Events from './events';
import EventsDetail from './events-detail';
import Game from './game';
import GameDetail from './game-detail';
import Reservation from './reservation';
import Account from './account';
import HomeGame from './home-matching-pair';

interface TabContextType {
  routeName: string;
  setRouteName: (name: string) => void;
}

export const TabContext = createContext<TabContextType>({
  routeName: '',
  setRouteName: () => {},
});

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{ 
          headerShown: false,
          gestureEnabled: false,
          headerLeft: null,
        }} 
      />
      <Stack.Screen
        name="HomeNewsDetail"
        component={HomeNewsDetail}
        options={{ 
          headerShown: false,
          gestureEnabled: false,
          headerLeft: null,
        }} 
      />
      <Stack.Screen
        name="HomeActivitiesDetail"
        component={HomeActivitiesDetail}
        options={{ 
          headerShown: false,
          gestureEnabled: false,
          headerLeft: null,
        }} 
      />
      <Stack.Screen
        name="HomeGame"
        component={HomeGame}
        options={{ 
          headerShown: false,
          gestureEnabled: false,
          headerLeft: null,
        }} 
      />
    </Stack.Navigator>
  );
}

function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Events"
        component={Events}
        options={{ 
          headerShown: false,
          gestureEnabled: false,
          headerLeft: null,
        }} 
      />
      <Stack.Screen
        name="EventsDetail"
        component={EventsDetail}
        options={{ 
          headerShown: false,
          headerLeft: null,
        }} 
      />
    </Stack.Navigator>
  );
}

function GameStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Game"
        component={Game}
        options={{ 
          headerShown: false,
          gestureEnabled: false,
          headerLeft: null,
        }} 
      />
      <Stack.Screen
        name="GameDetail"
        component={GameDetail}
        options={{ 
          headerShown: false,
          headerLeft: null,
        }} 
      />
    </Stack.Navigator>
  );
}

export default function Tabs() {
  const [routeName, setRouteName] = useState<string>('')

  return (
    <TabContext.Provider value={{ routeName, setRouteName }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#F2F2F2',
            height: 83,
            paddingTop: 15,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <View>
                {routeName === 'home' ?
                  <ActiveHome />
                  :
                  <NonActiveHome />
                }
              </View>
            )
          }}
        />
        <Tab.Screen 
          name="EventsStack"
          component={EventsStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <View>
                {routeName === 'events' ?
                  <ActiveEvents />
                  :
                  <NonActiveEvents />
                }
              </View>
            )
          }}
        />
        <Tab.Screen 
          name="GameStack"
          component={GameStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <View>
                {routeName === 'game' ?
                  <ActiveGame />
                  :
                  <NonActiveGame />
                }
              </View>
            )
          }}
        />
        <Tab.Screen 
          name="Reservation"
          component={Reservation}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <View>
                {routeName === 'reservation' ?
                  <ActiveReservation />
                  :
                  <NonActiveReservation />
                }
              </View>
            )
          }}
        />
        <Tab.Screen 
          name="Account"
          component={Account}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <View>
                {routeName === 'account' ?
                  <ActiveAccount />
                  :
                  <NonActiveAccount />
                }
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </TabContext.Provider>
  );
}