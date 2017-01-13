import qs from 'qs';
import { AsyncStorage } from 'react-native';

export default class ApiClient {
  get(path, query) {
    return this.call('get', path, query);
  }

  post(path, data) {
    return this.call('post', path, {}, data);
  }

  put(path, data) {
    return this.call('put', path, {}, data);
  }

  delete(path, query, data) {
    return this.call('delete', path, query, data);
  }

  call(method, path, query = {}, data = null) {
    if (['get', 'put', 'post', 'delete'].indexOf(method) < 0) {
      return Promise.reject(new Error('Method not supported'));
    }

    return AsyncStorage.getItem('accessToken')
    .then((accessToken) =>
      fetch(`${path}?${qs.stringify(query)}`, {
        method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Access-Token': accessToken
        },
        ...(data ? { body: JSON.stringify(data) } : {})
      })
    )
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        return response.json().then((json) => {
          const error = new Error(response.statusText);
          error.response = json;
          throw error;
        });
      }
      return response;
    })
    .then((response) => response.json());
  }
}
