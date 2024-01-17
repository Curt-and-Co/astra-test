import {StyleSheet, View} from 'react-native';
import SeriesDetails from '../components/SeriesDetails';

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <SeriesDetails
        seriesData={{
          title: '',
          summary: '',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default DetailsScreen;
