import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SeriesDetails from '../src/components/SeriesDetails';

describe('SeriesDetails', () => {
  const mockSeriesData = {
    name: 'Test Series',
    summary: 'Test Summary',
    image: {original: 'http://testimage.com', medium: 'http://testimage.com'},
  };

  it('renders series information correctly', () => {
    const mockMarkAsFavourite = jest.fn();
    const unmarkAsFavourite = jest.fn();
    const {getByText, getByTestId} = render(
      <SeriesDetails
        seriesData={mockSeriesData}
        isFavourite={false}
        unmarkAsFavourite={unmarkAsFavourite}
        markAsFavourite={mockMarkAsFavourite}
      />,
    );

    expect(getByText('Test Series')).toBeTruthy();
    expect(getByText('Test Summary')).toBeTruthy();
    expect(getByTestId('image').props.source.uri).toBe('http://testimage.com');
  });

  it('calls markAsFavourite when the mark as favourite button is pressed', () => {
    const mockMarkAsFavourite = jest.fn();
    const unmarkAsFavourite = jest.fn();
    const {getByText} = render(
      <SeriesDetails
        seriesData={mockSeriesData}
        isFavourite={false}
        unmarkAsFavourite={unmarkAsFavourite}
        markAsFavourite={mockMarkAsFavourite}
      />,
    );

    fireEvent.press(getByText('Mark as Favourite'));
    expect(mockMarkAsFavourite).toHaveBeenCalled();
  });
});
