$(function() {
    var x, y, z, i;
    var availSearch = [
        {
            "id":"1",
            "title":"gunung",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"../img/satu.jpg"
        },
        {
            "id":"2",
            "title":"gunung",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
        },
        {
            "id":"3",
            "title":"gunung",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
        },
        {
            "id":"4",
            "title":"gunung",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
        },
        {
            "id":"5",
            "title":"gunung",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
        },
        {
            "id":"6",
            "title":"gunung",
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

    $("#btn-search").click(function(){
        for(i in availSearch){

            // var data = "<div class='col-md-4'>" +
            //                 "<img src=" + availSearch[i].img + " class='img-fluid z-depth-1' data-toggle='modal' data-target='#modal1'/>" +
            //             "</div>"
            
            // $("#img").append(data);

            // // x += "title : " + availSearch[i].title + "</br>" + "link : " + availSearch[i].link + "</br>" + "img" + availSearch[i].img + "</br></br>";
            // document.getElementById("tittle").innerHTML = availSearch[i].title;
            // document.getElementById("link").innerHTML = availSearch[i].link;
            // document.getElementById("img").innerHTML = availSearch[i].img;
        }

        // document.getElementById("data").innerHTML = x;
        // $("#data").html("result : " + x);
        // $("#link").html("result : " + y);
        // $("#img").html("result : " + z);

        

    });
});

$(document).ready(function(){
    $("#btn-search").click(function(){
        $("#main").hide();
        $("#result-nav").show();
        $("#result-main").show();
    });
});

// ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++","Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" ];

