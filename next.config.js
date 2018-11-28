const SWPreCachWebpackPlugin = require('sw-precache-webpack-plugin');


module.exports = {
    webpack: config => {
        config.plugins.push(new SWPreCachWebpackPlugin({
            minify: true,
            staticFileGlobsIgnorePatterns: [/\.next\//],
            runtimeCaching: [
                {
                    handler: 'networkFirst',
                    urlPattern: /^https?.*/
                }
            ]
        }))

        return config;
    }
};