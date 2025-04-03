import { ref, watchEffect } from "vue";
import axios from "axios";

export function useAxios({
  method,
  url,
  body,
  headers,
  onSuccess,
  onError,
  paramsSerializer,
  responseType,
}) {
  const data = ref(null);
  const loading = ref(Boolean(url));
  const error = ref(null);
  const status = ref(null);

  watchEffect(() => {
    if (url) {
      const axiosInstance = axios.create();

      loading.value = true;

      axiosInstance({
        method,
        url,
        headers,
        params: method.toUpperCase() === "GET" ? body : undefined,
        data: method.toUpperCase() !== "GET" ? body : undefined,
        paramsSerializer,
        responseType,
      })
        .then((response) => {
          loading.value = false;
          status.value = response.status;
          data.value = response.data;

          if (typeof onSuccess === "function") {
            onSuccess(response.data, response.headers, response.status);
          }
        })
        .catch((err) => {
          loading.value = false;
          status.value = err.response?.status;
          error.value = err;

          if (typeof onError === "function") {
            onError(err);
          }
        });
    }
  });

  return { data, loading, error, status };
}

export function useAxiosCallback({ method, url, headers, paramsSerializer }) {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const status = ref(null);

  const executeRequest = ({ instanceUrl, body, onSuccess, onError } = {}) => {
    const axiosInstance = axios.create();

    loading.value = true;

    axiosInstance({
      method,
      url: instanceUrl || url,
      headers,
      params: method.toUpperCase() === "GET" ? body : undefined,
      data: method.toUpperCase() !== "GET" ? body : undefined,
      paramsSerializer,
    })
      .then((response) => {
        loading.value = false;
        status.value = response.status;
        data.value = response.data;

        if (typeof onSuccess === "function") {
          onSuccess(response.data, response.headers, response.status);
        }
      })
      .catch((err) => {
        loading.value = false;
        status.value = err.response?.status;
        error.value = err;

        if (typeof onError === "function") {
          onError(err);
        }
      });
  };

  return { data, executeRequest, loading, error, status };
}
