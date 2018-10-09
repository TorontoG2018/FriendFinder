//a POST routes /api/friends - this handles incoming survey results. will also used to handle the compatibility logic
//Load Data
var answerArray = require('../data/friends.js');
module.exports=function(app){


app.get("/api/friends", function(req, res) {
    res.json(answerArray);});

app.post("/api/friends",function(req, res){
  var newUserScore = req.body.scores;
  var resultArray = [];
  var match=0;

  for (var i = 0; i < answerArray.length; i++) {
      var Diff = 0;
      for (var j = 0; j < newUserScore.length; j++)
      {console.log(answerArray[i].scores[j])
      Diff+=(Math.abs(parseInt(answerArray[i].scores[j])-parseInt(newUserScore[j])));
      }
      resultArray.push(Diff);

  
  }

  console.log(resultArray);

  for (var i = 0; i < resultArray.length; i++){
    console.log(resultArray[i])
    if (resultArray[i]<=resultArray[match]){
      match=i;
      console.log(match);
    }
  }

  answerArray.push(req.body);
});

};



