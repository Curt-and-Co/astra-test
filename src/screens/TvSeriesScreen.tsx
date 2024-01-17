import React, {useCallback, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchResultItem from '../components/SearchResultItem';
import {useSeriesPageQuery} from '../hooks/useSeriesPageQuery';
import {useSeriesSearchQuery} from '../hooks/useSeriesSearchQuery';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {DetailsScreenRouteParams} from './DetailScreen';
import {AsyncStorageKeys, getItem} from '../utils/asyncStorage';

type RootStackParamList = {
  Details: DetailsScreenRouteParams;
};

const TvSeriesScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [favouriteSeries, setFavouriteSeries] = useState<number[]>([]);

  const {data, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useSeriesPageQuery();
  const {data: searchData, isLoading: isLoadingSearch} =
    useSeriesSearchQuery(search);

  useFocusEffect(
    useCallback(() => {
      const fetchFavourites = async () => {
        const favourites = await getItem(AsyncStorageKeys.FAVOURITES);
        if (favourites) {
          setFavouriteSeries(JSON.parse(favourites));
        }
      };

      fetchFavourites();
    }, []),
  );

  const loadMoreItems = () => {
    if (hasNextPage && !searchData) {
      fetchNextPage();
    }
  };

  const onSearch = (query: string) => {
    setSearch(query);
  };

  const goToSeriesDetail = ({title, seriesId}: DetailsScreenRouteParams) => {
    navigation.navigate('Details', {title, seriesId});
  };

  const series = searchData
    ? searchData.map(searchItem => searchItem.show)
    : data?.pages.flatMap(page => page);

  const seriesSorted = series?.sort((a, b) => {
    if (a?.name.startsWith('A') && !b?.name.startsWith('A')) {
      return -1;
    }
    if (!a?.name.startsWith('A') && b?.name.startsWith('A')) {
      return 1;
    }
    return a?.name.localeCompare(b?.name);
  });

  return (
    <View style={styles.container}>
      <SearchBar onSearch={onSearch} />
      {isLoadingSearch && <ActivityIndicator />}

      <FlatList
        contentContainerStyle={styles.flatList}
        style={styles.listContainer}
        data={seriesSorted}
        renderItem={({item}) => (
          <SearchResultItem
            favourite={favouriteSeries.includes(item.id)}
            onPress={goToSeriesDetail}
            title={item?.name}
            summary={item?.summary}
            imageUrl={item?.image?.medium}
            seriesId={item.id}
          />
        )}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={1}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 16,
  },
  container: {
    flex: 1,
    paddingTop: 16,
  },
  flatList: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
});

export default TvSeriesScreen;
