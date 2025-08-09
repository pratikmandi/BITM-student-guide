import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootNavigator';

type AcademicCalendarProps = NativeStackScreenProps<RootStackParamList, 'AcademicCalendar'>;

const tabs = ['UG 1st SEM', 'UG except 1st SEM', 'PG', 'Ph.D'];

const calendarData: Record<string, string[]> = {
  'UG 1st SEM': [
    'UG 1st Semester Academic Calendar'
  ],
  'UG except 1st SEM': [
    'UG except 1st Semester Academic Calendar'
  ],
  'PG': [
    'PG Academic Calendar'
  ],
  'Ph.D': [
    'Ph.D Academic Calendar'
  ],
};

const calendarToPdfMapping: Record<string, string> = {
  'UG 1st Semester Academic Calendar': 'ug_first_sem_calender',
  'UG except 1st Semester Academic Calendar': 'ug_except_first_sem_calender',
  'PG Academic Calendar': 'pg_calender',
  'Ph.D Academic Calendar': 'phd_calender',
};

const AcademicCalendar: React.FC<AcademicCalendarProps> = ({ navigation }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = tabs[activeTabIndex];
  const calendars = calendarData[activeTab] || [];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => {
          const isActive = index === activeTabIndex;
          return (
            <TouchableOpacity
              key={tab}
              style={[styles.tabItem, isActive && styles.activeTab]}
              onPress={() => setActiveTabIndex(index)}
            >
              <Text style={[styles.tabText, isActive && styles.activeText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <FlatList
        contentContainerStyle={styles.cardContainer}
        data={calendars}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              const pdfName = calendarToPdfMapping[item];
              if (pdfName) {
                navigation.navigate('PdfViewer', { pdfName, item: item });
              } else {
                console.warn(`No PDF mapping found for calendar: ${item}`);
              }
            }}
          >
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  tabItem: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeTab: {
    backgroundColor: '#f7664d',
    borderColor: '#f7664d',
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
  },
  activeText: {
    color: 'white',
  },
  cardContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#f3f4f6',
    padding: 20,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    textAlign:'center'
  },
});

export default AcademicCalendar;
