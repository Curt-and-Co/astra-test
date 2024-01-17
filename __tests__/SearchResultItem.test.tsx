import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchResultItem from '../src/components/SearchResultItem';

describe('SearchResultItem', () => {
  const mockOnPress = jest.fn();
  const props = {
    title: 'Test Title',
    summary: 'Test Summary',
    imageUrl: 'https://test.com/image.jpg',
    seriesId: 1,
    favourite: true,
    onPress: mockOnPress,
  };

  it('renders correctly', () => {
    const {getByText, getByTestId} = render(<SearchResultItem {...props} />);
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Summary')).toBeTruthy();
    const image = getByTestId('image');
    expect(image.props.source.uri).toBe(props.imageUrl);
  });

  it('displays favourite text when favourite is true', () => {
    const {getByText} = render(<SearchResultItem {...props} />);
    expect(getByText('Favourite')).toBeTruthy();
  });

  it('calls onPress with correct params when pressed', () => {
    const {getByTestId} = render(<SearchResultItem {...props} />);
    fireEvent.press(getByTestId('touchable'));
    expect(mockOnPress).toHaveBeenCalledWith({
      title: 'Test Title',
      seriesId: 1,
    });
  });
});
