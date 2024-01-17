import AsyncStorage from '@react-native-async-storage/async-storage';

export enum AsyncStorageKeys {
  FAVOURITES = 'favourites',
}

export const saveItem = async (
  key: AsyncStorageKeys,
  value: string,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

export const getItem = async (
  key: AsyncStorageKeys,
): Promise<string | null | undefined> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(error);
  }
};

export const removeItem = async (key: AsyncStorageKeys): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

export const resetLocalStorage = async () => {
  await AsyncStorage.clear();
};

export default {
  saveItem,
  getItem,
  removeItem,
  resetLocalStorage,
};
