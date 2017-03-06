var getNewLinks = function(){
  $('#list').empty();
  getLinks();
  $('#search').val("");
}

var getLinks = function(){
  var video = $('#search').val();
  var settings = {
    url: 'https://www.googleapis.com/youtube/v3/search?',
    method: 'get',
    dataType: 'json',
    data: {
      key: 'AIzaSyBFO5cUu5eCPKm8yhlY1EPAQIxGrmwuA8k',
      q: video,
      part: "snippet",
      maxResults: 30
    }
  }

  $.ajax(settings).done(function(response) {
    var videos = response.items;
    console.log(videos);
    _.each(videos, function(video){
      var html = Handlebars.templates.video({
        title: video.snippet.title,
        description: video.snippet.description,
        id: video.id.videoId,
      });
      $('#list').append(html);
    });
  });
};


$('button').on('click', getNewLinks);
