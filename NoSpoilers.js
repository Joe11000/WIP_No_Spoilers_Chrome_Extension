var top_ScoresCover = function()
{
    // top of the screen scores
  $('.score').each(function(i)
  {
      if(this.innerHTML != "")
        this.innerHTML = "?";
  });
}

var bottom_HideScores = function()
{
  // nhl tonight main scores on middle bottom of page
  $('[class="highlightgame_cell"][align="right"]').each(function(i)
  {
      this.innerHTML = "?"  // DOM element version of $('this')
  });
}

var right_HideGoals = function()
{
  // hide goals table on the right side of screen.
  $('#highlight_game_goals_tbl').each(function(e){
    this.style.display = "none";
  });
}

var middleRight_HideFeatureGameScore = function()
{
  $('#tdDetailsComingSoon #content_Details td[nowrap]')[0].innerHTML = "? - ?"
}

var hideAllSpoilers = function()
{

  top_ScoresCover();

  bottom_HideScores();

  right_HideGoals();

  middleRight_HideFeatureGameScore();
}


// var period = 10000; // milliseconds
// (function()
// {
//   window.setInterval( hideAllSpoilers, period)
// })();

// need to strip finished game info from json
var j = "";
(function() {
  // log all calls to setArray
  var proxied = loadScoreboard;
  loadScoreboard = function(json_info)
  {
    j = json_info;
    j.refreshInterval = 3;              // remove for final draft
    proxied.apply( this, arguments );
    console.log("ran proxied loadScoreboard");
    top_ScoresCover();
    return true;
  };
})();


(function()
{
  var proxied = _highlight.getHighlights;
  _highlight.getHighlights = function()
  {
    proxied.apply( this, arguments );
    console.log("ran proxied getHighlights");
    hideAllSpoilers();
    return true;
  };


  var proxied2 = onClickNextHighlightDate;
  onClickNextHighlightDate = function()
  {
    proxied2.apply( this, arguments);
    console.log("ran proxied onClickNextHighlightDate");
    hideAllSpoilers();
    return true;
  }

  var proxied3 = onClickPlayNext;
 onClickPlayNext = function()
 {
    proxied3.apply( this, arguments);
    console.log("ran proxied onClickPlayNext");
    hideAllSpoilers();
    return true;
 }

   var proxied4 = onClickPlayPrev;
 onClickPlayPrev = function()
 {
    proxied4.apply( this, arguments);
    console.log("ran proxied onClickPlayPrev");
    hideAllSpoilers();
    return true;
 }

    $("[onclick='onClickNextHighlightDate(true)']")
        .removeAttr('onclick')
        .bind("click", function(){
            onClickNextHighlightDate(true);
            console.log($(this) + " time through");
            hideAllSpoilers();
        })

        $("[onclick='onClickNextHighlightDate(false)']")
        .removeAttr('onclick')
        .bind("click", function(){
            onClickNextHighlightDate(false);
            console.log($(this) + " time through");
            hideAllSpoilers();
        })

  // $('[onclick*="onClickNextHighlightDate"]')

  // onload take away the inline function call to function and bind it

  // $('[onclick="onClickNextHighlightDate(false)"]:contains("PREV")').removeAttr('onclick')

})();

window.addEventListener("click", hideAllSpoilers, false);
 onClickPlayNext;


 $('[isselected="true"][tbltype="highlight_game"]') // select the current game being played from asking who is the current selected game in the middle bottom


  // proxied = ;
  //  = function()
  // {
  //   proxied.apply( this, arguments );
  //   hideAllSpoilers();
  //   return true;
  // };