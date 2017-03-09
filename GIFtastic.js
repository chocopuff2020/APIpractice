
// var topics = [ 'cat', 'dog', 'burger', 'food','code' ];

// var keyWord = $('#keyword-search').val();


            var api_key = 'dc6zaTOxFJmzC';
            var url = 'http://api.giphy.com/v1/stickers/search?limit=10&q=cat&api_key=' + api_key

                  $.ajax ( {
                      url: url,
                      method: 'GET',
                  }). done (function(response) {
                      for ( var i = 0; i<10; i++ ) {
                          console.log(response);
                          var gifs = response.data[i].images.downsized.url;
                          console.log(gifs);
                          $('#gif-container').append(`<img src='${gifs}'>`);
                      };
                  });

