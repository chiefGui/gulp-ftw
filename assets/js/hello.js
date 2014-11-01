var $        = require ('jquery')
    , React  = require ('react')
    , Lyrics = require ('./components/Lyrics')
    , words  = [
      'Now',
      'these',
      'points',
      'of',
      'data',
      'make',
      'a',
      'beautiful',
      'line',
      '.'
    ];

React.render(new Lyrics({
  lyrics: words
}), $('.lyrics').get(0));
