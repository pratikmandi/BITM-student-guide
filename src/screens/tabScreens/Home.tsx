import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, Linking } from 'react-native';
import React from 'react';
import { TabScreenProps } from './AllTabs';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import { RootStackParamList } from '../RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type HomeTabProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabScreenProps, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const Home = () => {
  const navigation = useNavigation<HomeTabProps>();
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"}/>
      <Image
        source={require('../../constants/images/bit2.webp')}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.separator}></View>
      <Text style={styles.category}>Categories</Text>
      <ScrollView 
      style={{
        marginBottom:65
      }}>
        <View style={[styles.buttonGrid]}>
          <View style={styles.iconWrapper}>
          <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.navigate('Syllabus')}
            >
            <FontAwesome5 name="book" size={25} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Syllabus</Text>
          </View>

          <View style={styles.iconWrapper}>
          <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.navigate('TimeTable')}
            >
            <FontAwesome5 name="stream" size={25} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Time Table</Text>
          </View>

          <View style={styles.iconWrapper}>
          <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.navigate('AcademicCalendar')}
            >
              <FontAwesome5 name="calendar" size={25} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Academic Calendar</Text>
          </View>

          <View style={styles.iconWrapper}>
          <TouchableOpacity 
              style={styles.button}
              onPress={()=>{
                Linking.openURL("https://erpportal.bitmesra.ac.in/");
              }}
            >
              <FontAwesome5 name="desktop" size={25} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>ERP</Text>
          </View>

          <View style={styles.iconWrapper}>
            <TouchableOpacity 
              style={styles.button}
              onPress={()=>{
                Linking.openURL("https://tp.bitmesra.co.in/");
              }}
            >
              <FontAwesome5 name="briefcase" size={25} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>TnP Portal</Text>
          </View>

          <View style={styles.iconWrapper}>
            <TouchableOpacity 
              style={styles.button}
              onPress={()=>{
                Linking.openURL("https://bitmesra.ac.in/Other-Department-Pages/content/1/183/10");
              }}
            >
              <FontAwesome5 name="rupee-sign" size={25} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Placements</Text>
          </View>

          <View style={styles.iconWrapper}>
            <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.navigate('Holiday')}
            >
              <FontAwesome5 name="toggle-off" size={25} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Holiday List</Text>
          </View>

          <View style={styles.iconWrapper}>
            <TouchableOpacity 
              style={styles.button}
              onPress={()=>navigation.navigate('Bus')}
              >
                <FontAwesome5 name="bus-alt" size={25} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Bus Time Table</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '90%',
    height: 220,
    borderRadius: 15,
    alignSelf: 'center',
  },
  separator: {
    height: 8,
    width: '8%',
    backgroundColor: 'silver',
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 15,
  },
  category: {
    textAlign: 'left',
    fontSize: 25,
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  iconWrapper: {
    width: '25%', // controls how many buttons per row (2 per row with spacing)
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f3f4f6',
    width: 60,
    height: 60,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'regular',
    marginTop: 8,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
});

