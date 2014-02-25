var top_ScoresCover = function()
{
  // top of the screen scores
  $('.score').each(function(i)
  {
      if(this.innerHTML != "")
        this.innerHTML = "?";
  });

  $('#hsbGames .winner').each(function(e){
    $(this).removeClass('winner');
  });

  // remove the 'FINAL', 'FINAL OT', or 'FINAL SO' from the stats in each block up top
  $('#hsbGames .scrblk .bsc.final div').each(function(index, element)
  {
    if(element.innerHTML)
      element.innerHTML = "GAME ENDED"
  });

$('#hdrBoard .hoverState .bsc div').each(function(){ this.innerHTML = "GAME ENDED" })
};

var bottom_HideScores = function()
{
  // nhl tonight main scores on middle bottom of page
  $('.highlightgame_cell[align="right"]').each(function(i)
  {
      this.innerHTML = "?"  // DOM element version of $('this')
  });

  $('#highlight_month_div .highlightgame_header[colspan]').each(function(e){
   this.innerHTML="GAME ENDED";
  });
};

var right_HideGoals = function()
{
  // hide goals table on the right side of screen.
  $('#highlight_game_goals_tbl').each(function(e){
    this.style.display = "none";
  });
};

var middleRight_HideFeatureGameScore = function()
{
  changing = $('#tdDetailsComingSoon #content_Details [align="center"]');
  changing[0].innerHTML = "? - ?";
  changing[1].innerHTML = "VS"
};

var hideAllSpoilers = function()
{
  top_ScoresCover();
  bottom_HideScores();
  right_HideGoals();
  middleRight_HideFeatureGameScore();
};

(function()
{
  hideAllSpoilers();

  // Any updates received (for entire duration of person visiting site) for the top of the screen will be covered.
  var proxied1 = loadScoreboard;
  loadScoreboard = function(json_info)
  {
    // json_info.refreshInterval = 5;
    return_val1 = proxied1.apply( this, arguments );
    top_ScoresCover();
    return return_val1;
  };

  // rehides the info on the middle right side of the screen when game is clicked on bottom of screen.
  var proxied3 = _console.playVideo
  _console.playVideo = function()
  {
    return_val3 = proxied3.apply( this, arguments );
    middleRight_HideFeatureGameScore();
    return return_val3;
  };

  var proxied5 = _highlight.getHighlightsCallBack;
  _highlight.getHighlightsCallBack = function()
  {
    var return_val5 = proxied5.apply(this, arguments);
    bottom_HideScores();
    return return_val5;
  }
})();