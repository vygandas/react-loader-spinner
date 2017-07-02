# react loader spinner

Get the AMD module located at `react-loader-spinner.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ReactLoaderSpinner': 'react-loader-spinner'
  }
});

require(['react', 'ReactLoaderSpinner'], function(React, ReactLoaderSpinner) {

  React.render(React.createElement(ReactLoaderSpinner), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
