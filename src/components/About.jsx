const React = require('react');

const About = React.createClass({
  render: function() {
    return(
      <div>
      <h1>About</h1>
      <p>This is a React app allowing you to search the OMDB database for movie information</p>
      </div>

      );
  }
});

module.exports = About;