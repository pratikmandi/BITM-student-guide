import { StyleSheet, View } from 'react-native';
import Pdf from 'react-native-pdf';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../screens/RootNavigator';
import { useEffect } from 'react';

type PdfViewerProps = NativeStackScreenProps<RootStackParamList, 'PdfViewer'>;

const PdfViewer: React.FC<PdfViewerProps> = ({ route, navigation }) => {
  const { pdfName, item } = route.params;
  const source = { uri: `bundle-assets://pdf/${pdfName}.pdf`, cache: true };

  useEffect(() => {
    navigation.setOptions({
      title: item,
    });
  }, [navigation, item]);

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages) => {
          console.log(`Loaded ${numberOfPages} pages`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginTop: 25,
  },
  pdf: {
    width: '100%',
    height: '100%',
    paddingHorizontal:10
  },
});

export default PdfViewer;