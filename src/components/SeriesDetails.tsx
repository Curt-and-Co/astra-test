import React, {FC} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  View,
  Button,
} from 'react-native';
import {Show} from '../api/types';

interface SeriesDetailsProps {
  seriesData?: {
    name: Show['name'];
    summary: Show['summary'];
    image: Show['image'];
  };
  isFavourite: boolean;
  unmarkAsFavourite: () => void;
  markAsFavourite: () => void;
}

const windowHeight = Dimensions.get('window').height;

const SeriesDetails: FC<SeriesDetailsProps> = ({
  seriesData,
  isFavourite,
  unmarkAsFavourite,
  markAsFavourite,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        testID="image"
        resizeMode="cover"
        source={{uri: seriesData?.image.original}}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <View style={styles.row}>
          <Text style={styles.title}>{seriesData?.name}</Text>
          {isFavourite ? (
            <Button
              testID="favourite"
              onPress={unmarkAsFavourite}
              title="Remove from Favourites"
            />
          ) : (
            <Button
              testID="favourite"
              onPress={markAsFavourite}
              title="Mark as Favourite"
            />
          )}
        </View>
        <Text style={styles.summary}>{seriesData?.summary}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingBottom: 48,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  image: {
    width: '100%',
    height: windowHeight / 2,
  },
  title: {
    fontSize: 22,
    flex: 1,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
  },
});

export default SeriesDetails;
