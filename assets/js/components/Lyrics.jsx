var React = require ('react')
    , _   = require ('underscore');

var Lyrics = {
  componentWillMount: function () {
    var lyrics = _.map(this.props.lyrics, function (lyric) {
      return lyric + ' ';
    });

    this.setState({
      lyrics: lyrics
    });
  },
  render: function () {
    return (
      <h1>
        {this.state.lyrics}
      </h1>
    );
  }
};

module.exports = React.createClass(Lyrics);
