// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {
    	url: 'inline'  // inlined as base64
    },
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {}
  }
};
