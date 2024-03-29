import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const BORDER_COLOR = '#fafafa';
const BACKGROUND_COLOR = 'white';

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
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 16,
    flex: 1,
    padding: 12,
    backgroundColor: BACKGROUND_COLOR,
  },
});
export default SearchBar;
