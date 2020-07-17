$(function() {
    var availSearch = [
        {
            "id":"1",
            "value":"ActionScript",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"img/satu.jpg"
        },
        {
            "id":"2",
            "value":"AppleScript",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
        },
        {
            "id":"3",
            "value":"COBOL",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
        },
        {
            "id":"4",
            "value":"ColdFusion",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
        },
        {
            "id":"5",
            "value":"Ruby",
            "link":"https://www.bromotravelindo.com/5-gunung-berapi-aktif-di-indonesia/",
            "img":"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
        },
        {
            "id":"6",
            "value":"Java",
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
    });

    function search(value, data) {
        var search=[]

        for (var j = 0; j < availSearch.length; j++) {
            value = value.toLowerCase()
            var name = availSearch[j].value.toLowerCase()
            if (name.includes(value)) {
                search.push(availSearch[j])
            }
        }
        return search;
    }

    function showData(data) {

        for(var i in data){

            var data = "<div class='col-md-3'>" +
                        "<a href="+ data[i].link +"><img src=" + data[i].img + " alt=" + data[i].title + " class='img-responsive'/></a> "+
                        "</div>";
            
            $("#result-main").append(data);
            
            // // x += "title : " + availSearch[i].title + "</br>" + "link : " + availSearch[i].link + "</br>" + "img" + availSearch[i].img + "</br></br>";
            // document.getElementById("tittle").innerHTML = availSearch[i].title;
            // document.getElementById("link").innerHTML = availSearch[i].link;
            // document.getElementById("img").innerHTML = availSearch[i].img;
        }
    }

    $("#btn-search").click(function(){
        var value = $("#search").val()
        console.log('Value:', value)
        var data = search(value, availSearch)
        showData(data)
        $("#main").hide();
        $("#result-nav").show();
        $("#result-main").show();
    });

});

// $(document).ready(function(){
    
// });

// ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++","Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" ];

