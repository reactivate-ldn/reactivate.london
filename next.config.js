var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/reactivate.london/" : "",
  exportPathMap: () => ({
    "/": { page: "/index" },
    "/code-of-conduct": { page: "/code-of-conduct" },
    "/past-speakers": { page: "/past-speakers" },
    "/schedule": { page: "/schedule" }
  }),
  webpack: function(config, { dev }) {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
        // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
        generateStatsFile: true,
        // Will be available at `.next/stats.json`
        statsFilename: "stats.json"
      })
    );

    if (dev) {
      return config;
    }

    config.resolve.alias = {
      react: "preact-compat/dist/preact-compat",
      "react-dom": "preact-compat/dist/preact-compat"
    };

    return config;
  }
};
