

const nextConfig = {
  turbopack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      sharp$: false,
      "onnxruntime-node$": false,
      "onnxruntime-web$": false,
    }
    return config;
  },
}

export default nextConfig;