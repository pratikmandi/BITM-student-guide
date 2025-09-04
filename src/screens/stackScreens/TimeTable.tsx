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

type TimeTableProps = NativeStackScreenProps<RootStackParamList, 'TimeTable'>;

const tabs = ['B.Tech', 'I.MSc.', 'Mgmt.', 'Others'];

const branchData: Record<string, string[]> = {
  'B.Tech': [
    'CSE Timetable', 
    'ECE Timetable', 
    'EEE Timetable', 
    'PIE Timetable', 
    'Mechanical Engineering Timetable',
    'Chemical Engineering Timetable',
    'Biotech Timetable',
    'Civil Engineering Timetable',
    'Food Tech Timetable'
  ],
  'I.MSc.': [
    'MnC Timetable', 
    'CQEDS Timetable',
    'Physics Timetable',
    'Chemistry Timetable',
  ],
  'Mgmt.': [
    'MBA Timetable', 
    'Integrated MBA Timetable',
    'BHMCT Timetable'
  ],
  'Others': [
    'Architecture Timetable',
    'Space Engineering and Rocketry Timetable',
    'Pharmacy Timetable',
    'Remote Sensing Timetable',
    'BMLT Timetable',
    'Ph.D Timetable'
  ],
};

const branchToPdfMapping: Record<string, string> = {
  // B.Tech
  'CSE Timetable': 'cse_timetable',
  'ECE Timetable': 'ece_timetable',
  'EEE Timetable': 'eee_timetable',
  'PIE Timetable': 'pie_timetable',
  'Mechanical Engineering Timetable': 'me_timetable', 
  'Chemical Engineering Timetable': 'chem_timetable', 
  'Biotech Timetable': 'bio_timetable', 
  'Civil Engineering Timetable': 'ce_timetable', 
  'Food Tech Timetable': 'cft_timetable', 
  
  // IMSc.
  'MnC Timetable': 'mnc_timetable',
  'CQEDS Timetable': 'qeds_timetable', 
  'Physics Timetable': 'physics_timetable', 
  'Chemistry Timetable': 'chem_imsc_timetable', 
  
  // Mgmt.
  'MBA Timetable': 'mba_timetable',
  'Integrated MBA Timetable': 'imba_timetable',
  'BHMCT Timetable': 'bhmct_timetable', 
  
  // Others
  'Architecture Timetable': 'architecture_timetable',
  'Space Engineering and Rocketry Timetable': 'ser_timetable', 
  'Pharmacy Timetable': 'pharmacy_timetable', 
  'Remote Sensing Timetable': 'rsg_timetable', 
  'BMLT Timetable': 'bmlt_timetable', 
  'Ph.D Timetable': 'phd_timetable', 
};

const TimeTable: React.FC<TimeTableProps> = ({ navigation }) => {
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
            onPress={() => {
              const pdfName = branchToPdfMapping[item];
        if (pdfName) {
          navigation.navigate('PdfViewer', { pdfName, item: item });
        } else {
          console.warn(`No PDF mapping found for branch: ${item}`);
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

export default TimeTable;