import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';

const BASE_URL = 'https://api.tvmaze.com/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  async config => {
    const networkState = await NetInfo.fetch();

    if (!networkState.isConnected) {
      Alert.alert('Network Error', 'No Internet Connection');
      return Promise.reject('No Internet Connection');
    }

    console.log(
      `Request URL: ${config.url}, Method: ${config.method?.toUpperCase()}`,
    );
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
