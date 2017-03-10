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
                    var dataStill = response.data[i].images.downsized_still.url;
                    var dataAnimate = response.data[i].images.preview_gif.url;
                    var rating = response.data[i].rating;
                    console.log(dataStill);
                    console.log(dataAnimate);
                    $('#gif-container').prepend(`
                        <div class="img-container">
                            <div>
                                <div> Rating: ${rating}</div>
                            </div>
                            <img src='${dataStill}' data-still='${dataStill}' data-animate='${dataAnimate}' data-state='still' class='gifs'>
                        </div>
                    `);
                    // $('#gif-container').prepend(`<p> Rating: ${rating} </p>`);

                };
            });
}

/*=====  End of Actions  ======*/


$('#add-btn').on('click', function(event) {
    event.preventDefault();
    $('#button-container').empty();
    input = $('#srch-term').val();
    topics.push(input);
    createButton();
    $('#srch-term').val('');
});

$(document).on("click", ".topic", function() {
        key = $(this).attr('data-id');
        console.log(key);
        getGIFs();
});


$(document).on('click', ".gifs", function(){
    var state = $(this).attr('data-state');
    if (state == 'still') {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state','still');
    }
})
createButton();