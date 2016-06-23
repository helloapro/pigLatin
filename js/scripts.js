$(function() {

  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var word = $("input#word").val();
    var letters = word.split("");
    alert(letters);


    var vowelFirst = word.concat("ay");
    alert(vowelFirst);




    });
});
