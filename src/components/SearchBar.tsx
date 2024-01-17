import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({onSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search TV Series"
        onChangeText={onSearch}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
});

export default SearchBar;
