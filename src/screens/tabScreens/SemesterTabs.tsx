import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RootStackParamList } from '../RootNavigator';
import SyllabusDetails from '../stackScreens/SyllabusDetails'

const Tab = createMaterialTopTabNavigator();

const getSemesters = (tab: string, branch: string) => {
  const semestersForLength = (length: number) => Array.from({ length }, (_, i) => `SEM ${i + 1}`);
  if (branch === 'Bachelor of Hotel Management and Catering Technology') {
    return semestersForLength(8);
  }
  if (branch === 'Space Engineering and Rocketry') {
    return semestersForLength(4);
  }
  if (branch === 'M.Tech. Remote Sensing') {
    return semestersForLength(4);
  }
  if (branch === 'M.Sc. Geoinformatics') {
    return semestersForLength(4);
  }
  if (branch === 'Architecture and Planning') {
    return semestersForLength(10);
  }
  // if (branch === 'M. Pharm. Pharmacology') {
  //   return Array.from({ length: 4 }, (_, i) => `SEM ${i + 1}`);
  // }
  // if (branch === 'M. Pharm. Pharmaceutical Quality Assurance') {
  //   return Array.from({ length: 4 }, (_, i) => `SEM ${i + 1}`);
  // }
  // if (branch === 'M. Pharm. Pharmaceutical Chemistry') {
  //   return Array.from({ length: 4 }, (_, i) => `SEM ${i + 1}`);
  // }
  // if (branch === 'M. Pharm. Pharmacognosy') {
  //   return Array.from({ length: 4 }, (_, i) => `SEM ${i + 1}`);
  // }
  if (branch === 'Bachelor of Pharmacy') {
    return semestersForLength(8)
  }
  if (branch === 'B.MLT') {
    return semestersForLength(8);
  }
  
  if (tab === 'B.Tech') {
    return semestersForLength(8);
  } else if (tab === 'I.MSc.') {
    return semestersForLength(10);
  } else if (tab === 'Mgmt.') {
    return semestersForLength(4);
  } else if (tab === 'Others') {
    return semestersForLength(4);
  }
  // Default to 8 sems
  return semestersForLength(8);
};

const SemesterTabs = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'SemesterTabs'>>();
  const { branch, tab } = route.params;
  const semesters = getSemesters(tab, branch);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: { backgroundColor: '#f7664d' },
        tabBarActiveTintColor: '#f7664d',
        tabBarInactiveTintColor: '#6b7280',
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarItemStyle: { width: 'auto', paddingHorizontal: 10 },
      }}>
      {semesters.map((semester) => (
        <Tab.Screen
          key={semester}
          name={semester}
          component={SyllabusDetails}
          initialParams={{ branch, semester }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default SemesterTabs;