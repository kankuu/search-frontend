$(function() {
    var x, i;
    var availSearch = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++","Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" ];

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

    $("#btn-search").click(function(){
        for(i in availSearch){

            x += availSearch[i] + "</br>";

        }

        // document.getElementById("data").innerHTML = x;
        $("#data").html("result : " + x);
    });
});

$(document).ready(function(){
    $("#btn-search").click(function(){
        $("#main").hide();
        $("#result-nav").show();
        $("#result-main").show();
    });
});

// {
//     "id":"1",
//     "title":"gunung",
//     "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
//     "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
// },
// {
//     "id":"2",
//     "title":"gunung",
//     "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
//     "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
// },
// {
//     "id":"3",
//     "title":"gunung",
//     "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
//     "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
// },
// {
//     "id":"4",
//     "title":"gunung",
//     "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
//     "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
// },
// {
//     "id":"5",
//     "title":"gunung",
//     "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
//     "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
// },
// {
//     "id":"6",
//     "title":"gunung",
//     "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
//     "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
// }];