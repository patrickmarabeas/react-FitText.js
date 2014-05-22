/**
 * @jsx React.DOM
 */

'use strict';

React.renderComponent( FitText( {text:"react-FitText.js", degree:"2", min:"30"} ), document.getElementById('ft1') );
React.renderComponent( FitText( {text:"FitText", degree:".315"} ), document.getElementById('ft2') );
React.renderComponent( FitText( {text:"rustled my jimmies", degree:".76"} ), document.getElementById('ft3') );
React.renderComponent( FitText( {text:"a React rework of the original", degree:"3", min:"20"} ), document.getElementById('ft4') );