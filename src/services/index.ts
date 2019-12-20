import Axios from "axios";

export const YuqueAxiosClient = Axios.create();

YuqueAxiosClient.interceptors.request.use(config => {
  config.headers["X-Auth-Token"] = "CqQjPUUHMru73fBd0q7fGB3BTKbvSiDxRS20Kv8P";
  return config;
});
