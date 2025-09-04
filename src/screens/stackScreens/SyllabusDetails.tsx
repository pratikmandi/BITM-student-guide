import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SectionList,
  Modal,
  ScrollView,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { branchSyllabusData, SubjectWithModules, SyllabusSection} from '../../constants/data/SyllabusData';
import { RootStackParamList } from '../RootNavigator';

type SemesterTabParamList = {
  [semesterName: string]: { branch: string; semester: string };
};

type SyllabusDetailsRouteProp = RouteProp<SemesterTabParamList, string>;

const SyllabusDetails = () => {
  const route = useRoute<SyllabusDetailsRouteProp>();
  const { branch, semester } = route.params;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<SubjectWithModules | null>(null);

  const syllabusSections: SyllabusSection[] =
    branchSyllabusData[branch]?.[semester] || [];

  const handleSubjectPress = (subject: SubjectWithModules) => {
    setSelectedSubject(subject);
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {syllabusSections.length > 0 ? (
        <SectionList
          contentContainerStyle={styles.sectionListContainer}
          sections={syllabusSections}
          keyExtractor={(item, index) => item.name + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.subjectItem}
              onPress={() => handleSubjectPress(item)}
            >
              <Text style={styles.subjectText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>
            Syllabus not available for this branch.
          </Text>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{selectedSubject?.name}</Text>
              <ScrollView style={styles.modalScrollView}>
                {selectedSubject?.syllabus?.map((module, index) => (
                  <View key={index} style={styles.moduleContainer}>
                    <Text style={styles.moduleTitle}>{module.title}</Text>
                    <Text style={styles.moduleText}>{module.description}</Text>
                  </View>
                ))}
              </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionListContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#333',
  },
  subjectItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
  },
  subjectText: {
    fontSize: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: '80%',
    width: '90%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalScrollView: {
    width: '100%',
  },
  moduleContainer: {
    marginBottom: 15,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  moduleText: {
    fontSize: 14,
    color: '#333',
  },
  noSyllabusText: {
    marginBottom: 20,
    textAlign: 'left',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#f7664d',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
    width: '50%',
    alignSelf: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noDataText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default SyllabusDetails;