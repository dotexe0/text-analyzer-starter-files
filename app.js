// your code here!
$(document).ready(function(){
  $('.js-analyze').submit(function(e){
    e.preventDefault();
    var text = $("textarea#user-text").val();

    //analysis of text//
    var arrayText = text.split(" ");
    //word count

    function countWords(arrayText){
      var count = arrayText.length;
      return count;
    }

    //unique word count
    function unique(arrayText){
      var uniq = [];
      for (var i = 0; i < arrayText.length - 1; i++){
        if (uniq.indexOf(arrayText[i]) === -1){
          uniq.push(arrayText[i]);
        }
      }
      return uniq.length;
    };

    // avg word length
    function averageWordLength(arrayText){
      var totalNumLength = 0;
      for (var i = 0; i < arrayText.length - 1; i++){
        totalNumLength += arrayText[i].length
      }
      var avgWordLength = totalNumLength / arrayText.length;
      return (avgWordLength).toFixed(2);
    }

    //avg sentence length
    function avgSentence(arrayText){
      var numSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
      var count = countWords(arrayText);
      return (count / numSentences).toFixed(2);
    }
    //append analyzed data
    $("#count").append(countWords(arrayText));
    //unique word count
    $("#unique-count").append(unique(arrayText));
    //avg word length
    $("#avg-word").append(averageWordLength(arrayText) + ' characters');
    //avg sentence length
    $("#avg-sentence").append(avgSentence(arrayText) + " sentences");
    //display the analyzed data
    $('.hidden').show();

    console.log(countWords(arrayText));
    console.log(unique(arrayText));
    console.log(averageWordLength(arrayText));
  });

});
