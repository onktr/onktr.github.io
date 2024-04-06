function finishLoad(){
    $("body").addClass("loaded");
    $('.loader-container').fadeOut();
}

$(document).ready(async function() {
    if (!$("body").hasClass("permanent-loader")) {
        $("#site").prepend('<video class="showcase" id="video" autoplay muted loop><source src="resources/videos/showcase.mp4" type="video/mp4"></video>');
        $("#video").bind('loadeddata', function(e) {
            finishLoad();
        });
    }
});
