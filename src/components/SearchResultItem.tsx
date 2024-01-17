import React, {FC, memo} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {DetailsScreenRouteParams} from '../screens/DetailScreen';

interface SearchResultItemProps {
  title: string;
  summary: string;
  imageUrl: string;
  seriesId: number;
  favourite: boolean;
  onPress: (params: DetailsScreenRouteParams) => void;
}

const SearchResultItem: FC<SearchResultItemProps> = memo(
  ({title, summary, imageUrl, onPress, seriesId, favourite}) => {
    return (
      <TouchableOpacity
        testID="touchable"
        onPress={() => onPress({title, seriesId})}
        style={styles.container}>
        <Image
          testID="image"
          resizeMode="cover"
          source={{uri: imageUrl}}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          {favourite && (
            <View style={styles.favourite}>
              <Text>Favourite</Text>
            </View>
          )}
          <Text style={styles.title}>{title}</Text>
          <Text ellipsizeMode="tail" numberOfLines={3} style={styles.summary}>
            {summary}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },
  areEqual,
);

function areEqual(
  prevProps: SearchResultItemProps,
  nextProps: SearchResultItemProps,
) {
  return (
    prevProps.title === nextProps.title &&
    prevProps.summary === nextProps.summary &&
    prevProps.imageUrl === nextProps.imageUrl &&
    prevProps.seriesId === nextProps.seriesId &&
    prevProps.favourite === nextProps.favourite
  );
}

const screenDimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  favourite: {
    backgroundColor: '#98FB98',
    padding: 8,
    borderRadius: 16,
    flex: 1,
    justifyContent: 'center',
    width: 80,
    height: 30,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 10,
  },
  image: {
    width: screenDimensions.width / 4,
    height: screenDimensions.height / 6,
    borderRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  summary: {
    fontSize: 14,
  },
});

export default SearchResultItem;
