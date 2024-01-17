import React, {FC} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';

export interface SeriesDetailItemData {
  title: string;
  id: string;
}

interface SearchResultItemProps {
  title: string;
  summary: string;
  imageUrl: string;
  onPress: (params: SeriesDetailItemData) => void;
}

const SearchResultItem: FC<SearchResultItemProps> = ({
  title,
  summary,
  imageUrl,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image resizeMode="cover" source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text ellipsizeMode="tail" numberOfLines={3} style={styles.summary}>
          {summary}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const screenDimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 10, // Add some margin at the bottom
  },
  image: {
    width: screenDimensions.width / 4,
    height: screenDimensions.height / 6,
    borderRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  textContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold', // Optional: Make title bold
    marginBottom: 5, // Space between title and summary
  },
  summary: {
    fontSize: 14,
  },
});

export default SearchResultItem;
