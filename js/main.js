$(function() {
    var availSearch = [
        {
            "id":"1",
            "value":"ActionScript",
            "link":"https://helpx.adobe.com/air/archived-docs-download.html",
            "img":"img/as.jpg"
        },
        {
            "id":"2",
            "value":"AppleScript",
            "link":"https://www.apple.com/",
            "img":"img/apple.jpg"
        },
        {
            "id":"3",
            "value":"COBOL",
            "link":"https://www.microfocus.com/documentation/visual-cobol/",
            "img":"img/cobol.jpg"
        },
        {
            "id":"4",
            "value":"ColdFusion",
            "link":"https://coldfunction.com/",
            "img":"img/cf.jpg"
        },
        {
            "id":"5",
            "value":"Ruby",
            "link":"https://www.ruby-lang.org/en/documentation/",
            "img":"img/ruby.jpg"
        },
        {
            "id":"6",
            "value":"Java",
            "link":"https://docs.oracle.com/en/java/",
            "img":"img/java.jpg"
        },
        {
            "id":"7",
            "value":"Cobolas",
            "link":"https://www.microfocus.com/documentation/visual-cobol/",
            "img":"img/cobolas.jpg"
        },
        {
            "id":"7",
            "value":"neko",
            "link":"https://nekonime.org/",
            "img":"img/satu.jpg"
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

            var load = "<div class='hot'>" +
                        "<a class='pilih' href='#detail' rel='modal:open' id=" + data[i].id + "><img src=" + data[i].img + " alt= " + data[i].value + " class='img-responsive normal' /></a></br>" +
                        // "<a id='link-text' href=" + data[i].link + "><span>" + data[i].value + "</span></a>" +
                        "</div>";
            
        $("#result-content").append(load);
            // showData(availSearch)       
            // x += "title : " + availSearch[i].title + "</br>" + "link : " + availSearch[i].link + "</br>" + "img" + availSearch[i].img + "</br></br>";
            // document.getElementById("tittle").innerHTML = availSearch[i].title;
            // document.getElementById("link").innerHTML = availSearch[i].link;
            // document.getElementById("img").innerHTML = availSearch[i].img;
        }
    }

    // for(var i in availSearch){

    //     var load = "<div class='col-md-4'>" +
    //                 "<img src=" + availSearch[i].img + " alt= " + availSearch[i].id + " class='img-responsive' />" +
    //                 "</div>";
        
    //     $("#result-main").append(load);
    //     // showData(availSearch)       
    //     // x += "title : " + availSearch[i].title + "</br>" + "link : " + availSearch[i].link + "</br>" + "img" + availSearch[i].img + "</br></br>";
    //     // document.getElementById("tittle").innerHTML = availSearch[i].title;
    //     // document.getElementById("link").innerHTML = availSearch[i].link;
    //     // document.getElementById("img").innerHTML = availSearch[i].img;
    // }

    showData(availSearch)

    function showDetail(id) {
        var result = availSearch.find(function(item) {
            return item.id == id;
        })
        var json = JSON.stringify(result);
        
        // console.log('hasil = ' + result.id);
        var load = "<img id=" +  result.id + " src=" + result.img + " alt= " + result.value + " class='img-responsive normal' />" +
                    "<h1>" + result.value + "</h1>" +
                    "<p class='mb-40'>" + result.link + "</p>";

        return $('#detail').append(load);
    }

    $("#btn-search").click(function(){
        // var value = $("#search").val()
        // console.log('Value:', value)
        // var data = search(value, availSearch)
        // showData(data)
        $("#main").hide();
        $("#result-nav").show();
        $("#result-content").css("display", "flex");
        $("#result-main").show();
    });

    $('.pilih').click(function () {   
        var id = this.id;
        showDetail(id);
        // console.log("id = " + id);
        
        $(this).modal({
            fadeDuration: 1000,
            fadeDelay: 0.50
        });
        // return false;
    })


});

// $(document).ready(function(){
    
// });

// ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++","Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" ];

