import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import SemSchedule from './SemSchedule';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Profile from './Profile';
export type TabScreenProps = {
  Home: undefined;
  Search: undefined;
  SemSchedule: undefined;
  Profile: undefined
};

const Tab = createBottomTabNavigator<TabScreenProps>();

const AllTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
          borderRadius: 100,
          position: 'absolute',
          bottom: 35,
          marginHorizontal: 40,
        },
        tabBarShowLabel: false,
        tabBarIconStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        },
        animation:'shift',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'SemSchedule') {
            iconName = 'tasks';
          }
          else if (route.name === 'Profile') {
            iconName = "user-alt";
          }

          return (
            <FontAwesome5
              name={iconName as any} // Type assertion to avoid TS error
              size={24}
              color={focused ? '#e02d04' : '#999'}
              solid={focused}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" options={{
          headerShadowVisible:false,
          headerTitle:'Welcome to BIT Mesra',
        }}component={Home} />
      {/* <Tab.Screen options={{headerShown:true}}name="Search" component={Search} /> */}
      <Tab.Screen options={{headerTitle:'Schedule Tasks'}}name="SemSchedule" component={SemSchedule} />
      <Tab.Screen options={{headerShown:true}} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AllTabs;

const styles = StyleSheet.create({});
