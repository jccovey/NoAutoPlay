(function() {
    var videos = document.querySelectorAll("video");
    
    if (videos != null) {
        for (var i = videos.length - 1; i >= 0; i--) { 
            videos[i].pause();
        }
    }
}());
