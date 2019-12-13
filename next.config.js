const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "~": __dirname
    };

    return config
  }
})
