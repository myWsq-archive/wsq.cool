import proxy from "http-proxy-middleware";

const apiProxy = proxy({
  target: "https://www.yuque.com",
  changeOrigin: true
});

export default apiProxy;
