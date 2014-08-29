













// GLOB_VARIABLES = {
//   PREFIX: "#Joe_Chrome_Extension_No_Touchie .container",
//   STATUS_BUTTON: "#Joe_Chrome_Extension_No_Touchie .container .button"
// };

// var SPOILERS_CONTROLLER = function()
// {
//   var changeButton = function(str_button)
//   {
//     // if(str_button === 'start' && $(GLOB_VARIABLES.STATUS_BUTTON).hasClass('start') )
//     // {
//       // $(STATUS_BUTTON).replaceWith(str_button == 'stop' ? stop_button : start_button);
//       console.log('change button to ' + str_button)
//     // }

//     // else if(str_button === 'stop' && $(GLOB_VARIABLES.STATUS_BUTTON).hasClass('stop')  )
//     // {
//       // $(STATUS_BUTTON).replaceWith(str_button == 'start' ? stop_button : start_button);

//     // }

//     // else
//     // {
//       // console.log("BUTTON_CONTROLLER.changeButton Error")
//     // }
//   };

//   var changeTextStatus = function(str_text_status)
//   {
//     console.log('change text to ' + str_text_status)
//   };

//   var running = true;

//   return {

//     is_running: function(){ return running; },

//     start: function()
//     {
//       running = true;
//       changeButton('start');
//       changeTextStatus('start');
//     },

//     stop: function()
//     {
//       running = false;
//       changeButton('stop');
//       changeTextStatus('stop');

//       // refresh page if on video.nhl.com
//       chrome.tabs.query({currentWindow: true, active: true}, function(tabs)
//       {
//         if(tabs[0].url == 'http://video.nhl.com')
//         {
//           location.reload();
//         }
//       })
//     }
//   }
// }

// s = new SPOILERS_CONTROLLER();
// s.start();
