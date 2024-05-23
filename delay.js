

var texts = ["WELCOME", "TO", "THE", "FUTURE"];


function showTextWithDelay() {
    var delay = 0;
    for (var i = 0; i < texts.length; i++) {
        setTimeout(function(text) {
            return function() {
                var divId = "div" + (texts.indexOf(text) + 1); // Get the div id
                var textDiv = document.getElementById(divId); // Get the div element
                textDiv.textContent = text; 
            };
        }(texts[i]), delay * 200); 

        delay += 5;
    }
}


showTextWithDelay();
