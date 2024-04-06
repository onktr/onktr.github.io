var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function finishLoad(){
    $("body").addClass("loaded");
    $('.loader-container').fadeOut();
}

$(document).ready(async function() {
    if (!$("body").hasClass("permanent-loader")){
        
            $("#site").prepend('<video class="showcase" id="video" autoplay muted loop><source src="resources/videos/showcase.mp4" type="video/mp4"></video>');
            $("#video").bind('loadeddata', function(e) {
                finishLoad()
            });
        }
    }
});
