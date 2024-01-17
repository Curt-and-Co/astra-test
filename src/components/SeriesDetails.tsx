import React, {FC} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

interface SeriesDetailsProps {
  seriesData: {
    title: string;
    summary: string;
    // Add more fields as necessary
  };
}

const SeriesDetails: FC<SeriesDetailsProps> = ({seriesData}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{seriesData.title}</Text>
      <Text style={styles.summary}>{seriesData.summary}</Text>
      {/* Render other series data as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
  },
});

export default SeriesDetails;
