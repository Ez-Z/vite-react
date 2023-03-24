import axios from "axios";
import storage from "good-storage";
import { isProd } from "@/utils";

function getAxios(serverUrl: string) {
  var axiosConfig = {
    baseURL: isProd() ? `${window.location.origin}${serverUrl}` : "",
    timeout: 10000,
  };

  var instance = axios.create(axiosConfig);
  const loginErrCodes = ["10102", "10103"];

  // 添加请求拦截器
  instance.interceptors.request.use(
    function (config) {
      try {
        const { headers } = config;
        const { token } =
          storage.session.get("logInfo") || storage.get("logInfo") || {};
        config.headers = {
          ...headers,
          Authorization: token,
        };
        return config;
      } catch (error) {
        console.log(error);
      }
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    function (response) {
      const code = response.data.errorCode;
      const source = storage.get("source");
      if (loginErrCodes.includes(code)) {
        // TODO: message
        return;
      }

      if (code === "10101") {
        storage.remove("logInfo");
        storage.session.remove("logInfo");
        return;
      }
      return response;
    },
    function (error) {
      // 对响应错误做点什么
      const { data = {}, status } = error.response || {};
      const errorMsg = data.errorMsg || "";

      if (status === 401) {
        storage.session.remove("logInfo");
        storage.remove("logInfo");
      }

      if (status === 403) {
        return;
      }
    }
  );
  return instance;
}
export default getAxios(import.meta.env.VITE_APP_PROXY_URL);
