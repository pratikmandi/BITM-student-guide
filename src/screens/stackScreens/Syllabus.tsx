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

type SyllabusProps = NativeStackScreenProps<RootStackParamList, 'Syllabus'>;

const tabs = ['B.Tech', 'IMSc.', 'Mgmt.', 'Others'];

const branchData: Record<string, string[]> = {
  'B.Tech': [
    'Computer Science and Engineering', 
    'Electronics and Communication Engineering', 
    'Electrical and Electronics Engineering', 
    'Production and Industrial Engineering', 
    'Mechanical Engineering',
    'Chemical Engineering',
    'Bioengineering and Biotechnology',
    'Civil and Environmental Engineering',
    'Centre for Food Engineering & Technology'
  ],
  'IMSc.': [
    'Mathematics and Computing', 
    'Centre for Quantitative Economics & Data Science',
    'Physics',
    'Chemistry',
  ],
  'Mgmt.': [
    'Master of Business Administration', 
    'Integrated MBA',
    'Bachelor of Hotel Management and Catering Technology'
  ],
  Others: [
    'Architecture and Planning',
    'Space Engineering and Rocketry',
    'Pharmacy',
    'Remote Sensing and Geoinformatics',
    'BMLT',
    'Ph.D'
  ],
};

const Syllabus: React.FC<SyllabusProps> = ({ navigation }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = tabs[activeTabIndex];
  const branches = branchData[activeTab] || [];

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
        data={branches}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            // onPress={() =>
            //   navigation.navigate('', {
            //     branch: item,
            //     tab: activeTab,
            //   })
            // }
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

export default Syllabus;