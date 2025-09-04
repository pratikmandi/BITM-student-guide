// RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllTabs from './tabScreens/AllTabs';
import Bus from './stackScreens/Bus';
import Holiday from './stackScreens/Holiday';
import AcademicCalendar from './stackScreens/AcademicCalendar';
import Syllabus from './stackScreens/Syllabus';
import TimeTable from './stackScreens/TimeTable';
import PdfViewer from '../components/PdfViewer';
import SemesterTabs from './tabScreens/SemesterTabs';

export type RootStackParamList = {
  Tabs: undefined,
  Bus: undefined,
  Holiday:undefined,
  AcademicCalendar:undefined,
  Syllabus:undefined,
  TimeTable:undefined
  TimeTableDetail: { branch: string; tab: string };
  PdfViewer: { pdfName: string; item: string };
  SemesterTabs: { branch: string; tab: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
      <Stack.Navigator  screenOptions={{ 
        headerShown: true
        }}>
          
        <Stack.Screen options={{
          headerShown:false,
          statusBarAnimation:'fade',
        }}
        name="Tabs" component={AllTabs} />

        <Stack.Screen options={{
            headerShown:true,
        }} name="Bus" component={Bus} />

        <Stack.Screen 
        options={{headerTitle:'Holiday List'}} name="Holiday" component={Holiday} />

        <Stack.Screen 
        options={{headerTitle:'Academic Calendar'}} name="AcademicCalendar" component={AcademicCalendar} />
        
        <Stack.Screen 
        options={{headerTitle:'Syllabus'}} name="Syllabus" component={Syllabus} />

        <Stack.Screen 
        options={{headerTitle:'Time Table'}} name="TimeTable" component={TimeTable} />

        <Stack.Screen name="PdfViewer" component={PdfViewer} 
        options={({ route }) => ({
          title: route.params.item,
        })}
      />

      <Stack.Screen name="SemesterTabs" component={SemesterTabs} options={{
        headerShown:true,
        headerTitle:'',
        headerShadowVisible:false
        }}/>
      </Stack.Navigator>
  );
};

export default RootNavigator;
