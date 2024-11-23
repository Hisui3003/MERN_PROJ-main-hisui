// vite.config.js
import { defineConfig } from "file:///C:/Users/Jade/OneDrive/Desktop/FOLDER/MERN_PROJ-main-hisui/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Jade/OneDrive/Desktop/FOLDER/MERN_PROJ-main-hisui/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()]
  // server: {
  //     proxy: {
  //         // Proxy /api requests to your backend server
  //         "/api": {
  //             target: "https://e-commerce-mgtd.onrender.com", // Replace with your backend server URL
  //             changeOrigin: true,
  //             secure: false,
  //             configure: (proxy, _options) => {
  //                 proxy.on("error", (err, _req, _res) => {
  //                     console.log("proxy error", err);
  //                 });
  //                 proxy.on("proxyReq", (proxyReq, req, _res) => {
  //                     console.log(
  //                         "Sending Request to the Target:",
  //                         req.method,
  //                         req.url
  //                     );
  //                 });
  //                 proxy.on("proxyRes", (proxyRes, req, _res) => {
  //                     console.log(
  //                         "Received Response from the Target:",
  //                         proxyRes.statusCode,
  //                         req.url
  //                     );
  //                 });
  //             },
  //         },
  // },
  // },
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKYWRlXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcRk9MREVSXFxcXE1FUk5fUFJPSi1tYWluLWhpc3VpXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSmFkZVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEZPTERFUlxcXFxNRVJOX1BST0otbWFpbi1oaXN1aVxcXFxjbGllbnRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0phZGUvT25lRHJpdmUvRGVza3RvcC9GT0xERVIvTUVSTl9QUk9KLW1haW4taGlzdWkvY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7LyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICAgIC8vIHNlcnZlcjoge1xyXG4gICAgLy8gICAgIHByb3h5OiB7XHJcbiAgICAvLyAgICAgICAgIC8vIFByb3h5IC9hcGkgcmVxdWVzdHMgdG8geW91ciBiYWNrZW5kIHNlcnZlclxyXG4gICAgLy8gICAgICAgICBcIi9hcGlcIjoge1xyXG4gICAgLy8gICAgICAgICAgICAgdGFyZ2V0OiBcImh0dHBzOi8vZS1jb21tZXJjZS1tZ3RkLm9ucmVuZGVyLmNvbVwiLCAvLyBSZXBsYWNlIHdpdGggeW91ciBiYWNrZW5kIHNlcnZlciBVUkxcclxuICAgIC8vICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgICAvLyAgICAgICAgICAgICBjb25maWd1cmU6IChwcm94eSwgX29wdGlvbnMpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBwcm94eS5vbihcImVycm9yXCIsIChlcnIsIF9yZXEsIF9yZXMpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm94eSBlcnJvclwiLCBlcnIpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHByb3h5Lm9uKFwicHJveHlSZXFcIiwgKHByb3h5UmVxLCByZXEsIF9yZXMpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBcIlNlbmRpbmcgUmVxdWVzdCB0byB0aGUgVGFyZ2V0OlwiLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm1ldGhvZCxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS51cmxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBwcm94eS5vbihcInByb3h5UmVzXCIsIChwcm94eVJlcywgcmVxLCBfcmVzKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJSZWNlaXZlZCBSZXNwb25zZSBmcm9tIHRoZSBUYXJnZXQ6XCIsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eVJlcy5zdGF0dXNDb2RlLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVxLnVybFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vIH0sXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThCckIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
