import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../src/components/SearchBar';

describe('SearchBar', () => {
  it('renders correctly', () => {
    const mockOnSearch = jest.fn();
    const tree = renderer
      .create(<SearchBar onSearch={mockOnSearch} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onSearch with the correct value when text changes', () => {
    const mockOnSearch = jest.fn();
    const instance = renderer.create(
      <SearchBar onSearch={mockOnSearch} />,
    ).root;

    const textInput = instance.findByType('TextInput');
    textInput.props.onChangeText('Test Query');

    // Check if onSearch was called with the correct value
    expect(mockOnSearch).toHaveBeenCalledWith('Test Query');
  });
});
