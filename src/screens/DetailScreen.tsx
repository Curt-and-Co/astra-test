import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import SeriesDetails from '../components/SeriesDetails';
import {useSeriesDetailQuery} from '../hooks/useSeriesDetailQuery';
import {RouteProp, useRoute} from '@react-navigation/native';
import {saveItem, AsyncStorageKeys, getItem} from '../utils/asyncStorage';

export type DetailsScreenRouteParams = {
  seriesId: number;
  title: string;
};

type DetailsScreenRouteProp = RouteProp<
  {params: DetailsScreenRouteParams},
  'params'
>;

const DetailsScreen: FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const {data: seriesData, isLoading} = useSeriesDetailQuery(
    route.params.seriesId,
  );

  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const updateFavouritesList = async (updatedList: number[]) => {
    try {
      await saveItem(AsyncStorageKeys.FAVOURITES, JSON.stringify(updatedList));
    } catch (error) {
      console.error('Failed to update favourites:', error);
    }
  };

  const markAsFavourite = async () => {
    if (!seriesData) {
      return;
    }

    const savedItemsString = await getItem(AsyncStorageKeys.FAVOURITES);
    const savedItems: number[] = savedItemsString
      ? JSON.parse(savedItemsString)
      : [];

    if (!savedItems.includes(seriesData.id)) {
      savedItems.push(seriesData.id);
      updateFavouritesList(savedItems);
      setIsFavourite(true);
    }
  };

  const unmarkAsFavourite = async () => {
    if (!seriesData) {
      return;
    }

    const savedItemsString = await getItem(AsyncStorageKeys.FAVOURITES);
    let savedItems: number[] = savedItemsString
      ? JSON.parse(savedItemsString)
      : [];

    if (savedItems.includes(seriesData.id)) {
      savedItems = savedItems.filter(item => item !== seriesData.id);
      updateFavouritesList(savedItems);
      setIsFavourite(false);
    }
  };

  useEffect(() => {
    const checkIfFavourite = async () => {
      if (!seriesData) {
        return;
      }

      const savedItemsString = await getItem(AsyncStorageKeys.FAVOURITES);
      const savedItems: number[] = savedItemsString
        ? JSON.parse(savedItemsString)
        : [];
      setIsFavourite(savedItems.includes(seriesData.id));
    };

    checkIfFavourite();
  }, [seriesData]);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator />}
      {!isLoading && (
        <SeriesDetails
          isFavourite={isFavourite}
          markAsFavourite={markAsFavourite}
          seriesData={seriesData}
          unmarkAsFavourite={unmarkAsFavourite}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetailsScreen;
