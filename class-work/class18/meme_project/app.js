$('.meme-form').submit(function (event) {
 event.preventDefault();
 console.log('submitting');
})

var userInput=$('.meme-input').val();



var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=XLUCLW3zY9CpJKQycjm2aDjYWawKjFpr&limit=5");
xhr.done(function (data) {

    var memes = data.data;
    memes.forEach(function(meme){
        var memeUrl = meme.images.looping.mp4;
  
        $('.video-wrapper').append('<video src="' + memeUrl + '" autoplay></video>');
      });
});

