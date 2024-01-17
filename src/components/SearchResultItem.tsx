import React, {FC} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface SearchResultItemProps {
  title: string;
  onPress: () => void;
}

const SearchResultItem: FC<SearchResultItemProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  text: {
    fontSize: 16,
  },
});

export default SearchResultItem;
