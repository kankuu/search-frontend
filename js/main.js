$(function() {
    var availSearch = ["ActionScript","AppleScript", "Asp", "BASIC", "C", "C++","Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" ];

    $("#search").autocomplete({
        source: availSearch,
        autofocus: true,
        delay: 0
    });
});