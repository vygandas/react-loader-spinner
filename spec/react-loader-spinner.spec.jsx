import React from 'react/addons';
import ReactLoaderSpinner from '../lib/react-loader-spinner.jsx';

describe('ReactLoaderSpinner', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactLoaderSpinner/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('react-loader-spinner');
  });
});
