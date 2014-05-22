/**
 * @jsx React.DOM
 *
 * react-FitText.js v0.0.2
 * https://github.com/patrickmarabeas/react-FitText.js
 *
 * Original jQuery project: https://github.com/davatron5000/FitText.js
 * AngularJS version: https://github.com/patrickmarabeas/ng-FitText.js
 *
 * Copyright 2014, Patrick Marabeas http://marabeas.io
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 22/05/2014
 */

'use strict';

var FitText = React.createClass({displayName: 'FitText',
  render: function() {
    var text = this.props.text;
    return React.DOM.span(null, text);
  },
  componentDidMount: function() {
    var elem = this.getDOMNode();
        elem.style.display = 'block';
    var degree = this.props.degree || 1;
    var min = this.props.min || Number.NEGATIVE_INFINITY;
    var max = this.props.max || Number.POSITIVE_INFINITY;

    var resizer = function() {
      var width = elem.offsetWidth;
      elem.style.fontSize = Math.max(
        Math.min(
            width / ( degree * 10 ),
          parseFloat( max )
        ),
        parseFloat( min )
      ) + 'px';
    }; resizer();

    window.addEventListener("resize", function() {
      resizer();
    });
  }
});