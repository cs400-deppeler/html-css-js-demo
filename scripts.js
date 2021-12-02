    var n = 0;
    function clickMe() {
      n += 1;
      var button = document.getElementById("click");
      var tally = document.getElementById("tally");
      var count = document.getElementById("count");
      if ( button.innerHTML == "Click Me" ) {
        button.innerHTML = "Don't Click Me";
        tally.innerHTML += "1" ; <!-- up arrow "&uarr;"; -->
      } else {
        button.innerHTML = "Click Me";
        tally.innerHTML += "0" ; <!-- down arrow "&darr;"; -->
      }
      count.innerHTML = "" + n;
    }

    var logString = "";

    // add date -> msg to the logString
    function log(msg) {
      if (msg=="") return;
      var date = new Date();
      var logmsg = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + " -> " + msg;
      logString += logmsg + "<br>";
      document.getElementById("log").innerHTML = logString;
    }

    function clearLog() {
      logString = "";
      document.getElementById("log").innerHTML = logString;
    }

    // From: https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
    function download(text, name, type) {
        var a = document.getElementById("log");
        var file = new Blob([text], {type: type});
        a.href = URL.createObjectURL(file);
        a.download = name;
    }


    var logfile= 'log.txt';
    function writeToFile() {
    //TODO: make this work
    //set fso = CreateObject("Scripting.FileSystemObject"); 
    //set s   = fso.CreateTextFile(logfile, True);
 
    //var firstName = document.getElementById('log');
 
    //s.writeline("First Name :" + FirstName);
    //s.writeline("Last Name :" + lastName);
 
    //s.writeline("-----------------------------");
    //s.Close();
    }

