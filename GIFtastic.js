var topics = ['cat', 'dog', 'fitness', 'coffee', 'code'];
var buttonContainer = document.getElementById('button-container');
var input;



var key ;

/*=======================================
=            Actions          =
=======================================*/
function createButton() {
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        $('#button-container').append(`<button class="btn btn-success topic" data-id='${topics[i]}'> ${topics[i]} </button>  `);

    };
};

function getGIFs() {
        var api_key = 'dc6zaTOxFJmzC';
        var url = 'http://api.giphy.com/v1/stickers/search?limit=5&q='+ key+'&api_key=' + api_key

            $.ajax({
                url: url,
                method: 'GET',
            }).done(function(response) {
                for (var i = 0; i < 5; i++) {
                    console.log(response);
                    var gifs = response.data[i].images.downsized.url;
                    console.log(gifs);
                    $('#gif-container').prepend(`<img src='${gifs}'>`);
                    // $('#gif-co').
                };
            });
}

/*=====  End of Actions  ======*/


/*====================================================
=          Create New Buttons on-the-flight       =
====================================================*/
$('#add-btn').on('click', function(event) {
    event.preventDefault();
    $('#button-container').empty();
    input = $('#srch-term').val();
    topics.push(input);
    createButton();
    $('#srch-term').val('');
});


/*=====  End of Create New Buttons on-flight  ======*/

$(document).on("click", ".topic", function() {
        key = $(this).attr('data-id');
        console.log(key);
        getGIFs();
});
createButton();