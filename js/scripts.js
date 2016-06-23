var pigLatin = function(word) {
  var v = word.charAt(0);
  if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u") {
    var vowelFirst = word.concat("ay");
    alert(vowelFirst);
  } else {
    var leaveFirst = word.substring(word.length - (word.length - 1));
    var altWord = leaveFirst + word.charAt(0);
    var consonantFirst = altWord.concat("ay")
    alert(consonantFirst);
    //var letters = word.split("");
    //alert(letters);
    //alert("what?!");
  };
};

$(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var word = $("input#word").val();

    var result = pigLatin(word);
    alert(result);

  });
});
