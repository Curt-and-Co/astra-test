import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailScreen';
import TvSeriesScreen from '../screens/TvSeriesScreen';
import {enableScreens} from 'react-native-screens';

enableScreens();
const Stack = createNativeStackNavigator();
const Root = () => {
  return (
    <Stack.Navigator initialRouteName="Tv-Series">
      <Stack.Screen name="Tv-Series" component={TvSeriesScreen} />
      <Stack.Screen
        name="Details"
        options={{title: ''}}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default Root;
