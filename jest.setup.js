jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve(null)),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve(null)),
  clear: jest.fn(() => Promise.resolve(null)),
}));

jest.mock('@react-native-community/netinfo', () => {
  return {
    fetch: jest.fn(() =>
      Promise.resolve({
        isConnected: true,
      }),
    ),
  };
});
