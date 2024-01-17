import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchResultItem, {
  SeriesDetailItemData,
} from '../components/SearchResultItem';

function HomeScreen({navigation}) {
  const onSearch = () => {
    console.log('searching');
  };

  const goToSeriesDetail = ({title, id}: SeriesDetailItemData) => {
    navigation.navigate('Details', {title, id});
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={onSearch} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <SearchResultItem
          title="Girls"
          onPress={goToSeriesDetail}
          imageUrl={
            'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg'
          }
          summary={
            'This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.'
          }
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

export default HomeScreen;
