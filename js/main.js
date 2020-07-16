$(function() {
    var availSearch = [
        {
            "title":"gunung",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"/img/satu.jpg"
        },
        {
            "title":"mana",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
        },
        {
            "title":"klsains",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
        },
        {
            "title":"asihdna",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
        },
        {
            "title":"jahusga",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
        },
        {
            "title":"jahs",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
        }];

    $("#search").autocomplete({
        source: availSearch,
        autofocus: true,
        delay: 0
    });

    $("#search-result").autocomplete({
        source: availSearch,
        autofocus: true,
        delay: 0
    });

    for(var i in availSearch){

        var data = "<div class='col-md-3'>" +
                    "<img src=" + availSearch[i].img + " alt=" + availSearch[i].title + " class='img-responsive'/> "+
                    "</div>";
        
        $("#result-main").append(data);
        
        // // x += "title : " + availSearch[i].title + "</br>" + "link : " + availSearch[i].link + "</br>" + "img" + availSearch[i].img + "</br></br>";
        // document.getElementById("tittle").innerHTML = availSearch[i].title;
        // document.getElementById("link").innerHTML = availSearch[i].link;
        // document.getElementById("img").innerHTML = availSearch[i].img;
    }
});

$(document).ready(function(){
    $("#btn-search").click(function(){
        $("#main").hide();
        $("#result-nav").show();
        $("#result-main").show();
    });
});

// ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++","Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" ];

