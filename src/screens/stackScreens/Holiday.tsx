import { StyleSheet, Text, View} from 'react-native'
import Pdf from 'react-native-pdf';

const Holiday = () => {
    const source = { uri: 'bundle-assets://pdf/holiday_2025.pdf', cache: true }; // for Android, place in android/app/src/main/assets/pdf

    return (
        <View style={styles.container}>
          <Pdf
            trustAllCerts={false}  //fixes trust manager error
            source={source}
            style={styles.pdf}
            onLoadComplete={(numberOfPages) => {
              console.log(`Loaded ${numberOfPages} pages`);
            }}
            onError={(error) => {
              console.log(error);
            }}
          />
        </View>
      );
    };

export default Holiday

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f4f6',
    },
    pdf: {
      width:'100%',
      height:'90%',
      elevation:2,
      backgroundColor:'white',
    },
  });